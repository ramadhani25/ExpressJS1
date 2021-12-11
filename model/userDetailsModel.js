const {Sequelize, DataTypes} = require('sequelize')
const {connect} = require('../helper/connectionDB')

const user_details = connect.define('user_details', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps: false,
}
)

module.exports = {
    user_details,
};