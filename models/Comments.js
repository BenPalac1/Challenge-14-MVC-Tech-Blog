const {Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Comment.init (
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
          }
    },
    
    {
        sequelize,
        modelName: 'Comments',
    }
);

module.exports = Comment;