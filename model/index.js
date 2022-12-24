// 시퀄라이즈 모델 불러옴
const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize)

db.User.hasMany(db.Post,{
    foreignKey : "userid", //payment table
    sourceKey:"id", // user_id table
    onDelete:"casacade",
 })
 db.Post.belongsTo(db.User,{
     foreignKey : "userid",
     sourceKey:"id", 
     onDelete:"casacade",
 })
 db.User.hasMany(db.Post,{
    foreignKey : "writer", //payment table
    sourceKey:"name", // user_id table
    onDelete:"casacade",
 })
 db.Post.belongsTo(db.User,{
     foreignKey : "writer",
     sourceKey:"name", 
     onDelete:"casacade",
 })

module.exports = db;