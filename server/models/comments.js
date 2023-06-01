const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Comments: sequelize.define("comments", {
    commentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    commentText: DataTypes.TEXT,
  }),
};
