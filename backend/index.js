import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import FotoRoute from "./routes/FotoRoute.js";
import KomenRoute from "./routes/KomenRoute.js"
import AlbumRoute from "./routes/AlbumRoute.js";
import LikeRoute from "./routes/LikeRoute.js";
// import TanggapanRoute from "./routes/TanggapanRoute.js"
import dotenv from "dotenv"
// import { result } from "lodash";
// import { message } from "statuses";

const app = express();

// app.post('/register', (req,res) => {
//     const email = req.body.email;
//     const username = req.body.username;
//     const password = req.body.password;

//     con.query("INSERT INTO user (email, username, password) VALUES (?, ?, ?)", [email, username, password],
//         (err,result) => {
//             if(result){
//                 res.send(result);
//             }else{
//                 res.send({message: "ENTER CONNECT ASKED DETAILS!"})
//             }
//         }
//     )
// })

// app.post('/login', (req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     con.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password],
//         (err,result) => {
//             if(err){
//                 res.setEncoding({err:err});
//             }else{
//                 if(result.length > 0){
//                     res.send(result);
//                 }else
//                 res.send({message: "WRONG USERNAME OR PASSWORD"})
//             }
//         }
//     )
// })

dotenv.config()

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"))
// app.use(result());
// app.use(message());
app.use(UserRoute);
app.use(FotoRoute);
app.use(KomenRoute);
app.use(AlbumRoute);
app.use(LikeRoute);
// app.use(TanggapanRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'))