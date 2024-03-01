import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Foto from "./FotoModel.js";


const {DataTypes} = Sequelize;

const Komentar = db.define("komentar", {
    KomentarID: {type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement:true},
    FotoId: {type: DataTypes.INTEGER(11)},
    UserId: {type: DataTypes.INTEGER(11)},
    TanggalKomentar: DataTypes.DATE(),
    IsiKomentar: DataTypes.TEXT(),
    // foto: DataTypes.STRING(255),
}, {
    freezeTableName: true
});

Komentar.belongsTo(User,{foreignKey:"UserId"});
Komentar.belongsTo(Foto,{foreignKey:"FotoId"});
User.hasMany(Komentar,{foreignKey:"UserId"});

export default Komentar;

(async()=>{
    await db.sync();
})();