import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Album from "./AlbumModel.js";



const {DataTypes} = Sequelize;

const User = db.define("user", {
    UserId: {type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement:true},
    email : DataTypes.CHAR(255),
    nama: DataTypes.CHAR(255),
    username: DataTypes.STRING(35),
    password: DataTypes.STRING(32),
    alamat: DataTypes.TEXT(),
    refresh_token: DataTypes.TEXT(),
}, {
    freezeTableName: true
});

User.hasMany(Album, { foreignKey: "UserId" });

export default User;

(async()=>{
    await db.sync();
})();