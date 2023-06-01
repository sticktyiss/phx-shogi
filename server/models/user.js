const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Users: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPass: DataTypes.TEXT,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    draws: DataTypes.INTEGER,
  }),
};
