const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Client = db.define('Client', {
    name:{ 
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    type_of_cut:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

Client.belongsTo(User)
User.hasMany(Client)

module.exports = Client