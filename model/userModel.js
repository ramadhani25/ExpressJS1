const {Sequelize, DataTypes} = require('sequelize')
const {connect} = require('../helper/connectionDB')

const user = connect.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
{
    freezeTableName: true,
    timestamps: false,
}
)

module.exports = {
    user,
};