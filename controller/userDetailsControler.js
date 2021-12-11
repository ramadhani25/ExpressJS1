const {user_details} = require('../model/userDetailsModel')
const bcrypt = require('bcrypt');
require('dotenv').config()
var jwt = require('jsonwebtoken');

const saltRounds = 10;

const getUserDetails = async (req, res) => {
    let {userID} = req.body;
    try {
        const userDetails = await user_details.findAll({
            where: {
                user_id: userID
            }
        });
        res.send(userDetails)
    } catch (e) {
        res.send(e);
    }
}

const addUserDetails = async (req, res) => {
    let {name, age, address, phone, user_id} = req.body;
    try {
        const newUser = await user_details.create({
            name,
            age,
            address,
            phone,
            user_id,
        })
        res.send({
            status: 'ok',
            desc: `user details sudah ditambahkan`,
        });
    } catch (e) {
        res.send(e)
    }
}

const editUserDetails = async (req, res) => {
    let {newname, newage, newaddress, newphone, user_id} = req.body;
    try {
        await user.update({
            name: newname,
            newage: newage,
            address: newaddress,
            phone: newphone,
        },  {
            where: {
                user_id
            }
        });
        res.send('user details sudah diedit');
    } catch (e) {
        console.log(e)
    }
}

const deleteUserDetails = async (req, res) => {
    let {user_id} = req.body;
    try {
        await user.destroy({
            where: {
                user_id
            }
        })
        res.send('user details terhapus')
    } catch (e) {
        res.send(e);
    }
}

module.exports = {
    getUserDetails,
    addUserDetails,
    editUserDetails,
    deleteUserDetails


}