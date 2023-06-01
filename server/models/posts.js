const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Posts: sequelize.define("posts", {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    postTitle: DataTypes.STRING,
    postText: DataTypes.TEXT,
  }),
};
