import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Foto from "./FotoModel.js";

const {DataTypes} = Sequelize;

const Album = db.define("album", {
    AlbumID: {type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement:true},
    TanggalDibuat: DataTypes.DATE(),
    NamaAlbum: DataTypes.CHAR(255),
    UserId: {type: DataTypes.INTEGER(11)},
    Deskripsi: DataTypes.TEXT(),
}, {
    freezeTableName: true
});

// User.hasMany(Album,{foreignKey:"UserId"});

export default Album;

(async()=>{
    await db.sync();
})();