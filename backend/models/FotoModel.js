import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Album from "./AlbumModel.js";

const { DataTypes } = Sequelize;

const Foto = db.define("foto", {
    FotoId: { type: DataTypes.INTEGER(11), primaryKey: true },
    JudulFoto: DataTypes.CHAR(255),
    Deskripsi: DataTypes.TEXT,
    TanggalDibuat: DataTypes.DATE(),
    LokasiFile: DataTypes.CHAR(255),
    AlbumID: { type: DataTypes.INTEGER(11) },
    UserId: { type: DataTypes.INTEGER(11) }
}, {
    freezeTableName: true
});

// Define associations
Foto.belongsTo(User, { foreignKey: "UserId" });
Foto.belongsTo(Album, { foreignKey: "AlbumId" });
User.hasMany(Foto, { foreignKey: "UserId" });

export default Foto;

(async () => {
    await db.sync();
})();
