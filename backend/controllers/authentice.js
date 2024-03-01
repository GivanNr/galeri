import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import User from "../models/UserModel.js";

// Register
export const register = async(req, res) => {
  try {
      const {username,email, password, confPassword, nama, alamat} = req.body;

      if (password !== confPassword) return res.status(400).json({msg:"Confirm your Password"});
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      try {
          await User.create({
              username,
              email,
              password: hashPassword,
              nama,
              alamat
          });
          res.json({msg: "Register berhasil"});
      } catch (e) {
          console.error(e)
          res.status(500).json({msg: error.message })
      }
  } catch (error) {
      
  }
  
};


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.email = decoded.email;
      next();
    });
  };
  

export const refreshToken = async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.sendStatus(401);
      const user = await User.findAll({
        where: {
          refresh_token: refreshToken,
        },
      });
      if (!user[0]) return res.sendStatus(403);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          if (err) return res.sendStatus(403);
          const UserId = user[0].id;
          const username = user[0].username;
          const email = user[0].email;
          const accessToken = jwt.sign(
            {
              UserId,
              username,
              email,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: "15s",
            }
          );
          res.json({ accessToken });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };


// Login
export const login = async(req, res) => {
    try {
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        });

        const match  = await bcrypt.compare(req.body.password, user[0].password);
        // if (!match) return res.status(400).json({msg: "Wrong password"});
        const UserId = user[0].UserId;
        const nama = user[0].nama;
        const username = user[0].username;
        const email = user[0].email;
        const alamat = user[0].alamat;
      
        const accessToken = jwt.sign({UserId,nama,username, email, alamat}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({UserId,nama,username, email, alamat}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await User.update({refresh_token: refreshToken}, {
            where: {
                UserId: UserId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json(error.message)
    }
};


// Logout
export const logout = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await User.findAll({
            where: {
                refresh_token: refreshToken,
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const UserId =  user[0].id;
        await User.update({refresh_token: null}, {
            where:{
                id: UserId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    } catch (error) {
        
    }
};