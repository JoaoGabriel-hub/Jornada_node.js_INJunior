const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const sequelize = require('../../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: uuidv4(),
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

//User.hasMany(Task, { onDelete: 'CASCADE' });//

module.exports = User;