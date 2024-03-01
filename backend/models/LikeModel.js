import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Foto from "./FotoModel.js";


const {DataTypes} = Sequelize;

const Like = db.define("like", {
    LikeID: {type: DataTypes.INTEGER(11), primaryKey: true, autoIncrement:true},
    FotoId: {type: DataTypes.INTEGER(11)},
    UserId: {type: DataTypes.INTEGER(11)},
    TanggalLike: DataTypes.DATE(),
}, {
    freezeTableName: true
});

Like.belongsTo(User,{foreignKey:"UserId"});
Like.belongsTo(Foto,{foreignKey:"FotoId"});
User.hasMany(Like,{foreignKey:"UserId"});

export default Like;

(async()=>{
    await db.sync();
})();