const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    // table name
    "user",
    {
      id: {
        type: DataTypes.STRING(20), // varchar(10)
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
        type: DataTypes.STRING(20),
        allowNull: true,
      }
    },
    {
      tablename: "travel",
      freezeTableName: true,
      timestamps: false
    }
  );
}

module.exports = User;