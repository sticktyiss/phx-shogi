const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
  Post: sequelize.define('post', {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    postTitle: DataTypes.STRING,
    postText: DataTypes.TEXT
  })
}