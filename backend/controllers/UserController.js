import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                UserId: req.params.UserId
            }   
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// export const saveUser = async (req, res) => {
//     const { email, password,} = req.body;
//     try {
//         // Validasi input di sini jika diperlukan
        
//         // Hash password sebelum disimpan
//         const hashedPassword = await bcrypt.hash(password, 10);

//         await User.create({email,password,});
//         res.status(201).json({ msg: "Account created successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

export const updateUser = async (req, res) => {
    const { nama, username, password, alamat } = req.body;
    try {
        const user = await User.findOne({
            where: {
                id_user: req.params.id_user
            }
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update data pengguna
        await user.update({ nama, username, password, alamat });

        res.status(200).json({ msg: "Account updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                UserId: req.params.UserId
            }
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.destroy();
        res.status(200).json({ msg: "Account deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
