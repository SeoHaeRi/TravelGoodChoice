// 시퀄라이즈 모델 불러옴
const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Post = require("./Post")(sequelize, Sequelize);
db.Comment = require("./Comment")(sequelize, Sequelize);

db.Post.hasMany(db.Comment, {
    foreignKey: "post_id",
    sourcekey: "index_number",
    onDelete: "cascade",
    onUpdate: "cascade"
});

db.Comment.belongsTo(db.Post, {
    foreignKey: "post_id",
    sourcekey: "index_number",
    onDelete: "cascade",
    onUpdate: "cascade"
});

module.exports = db;