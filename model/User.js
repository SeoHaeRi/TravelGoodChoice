const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    // table name
    "user",
    {
      id: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      profile_img: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      hint: {
        type: DataTypes.STRING(10),
        allowNull: false, 
      },
      hint_answer: {
        type: DataTypes.STRING(50),
        allowNull: false, 
      },
      social_type: {
        type: DataTypes.STRING(10),
        allowNull: true,
      }
  },
  // table option
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tablename: "travel",
      freezeTableName: true,
      timestamps: false
    }

  );
}

module.exports = User;