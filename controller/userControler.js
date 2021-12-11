const {user} = require('../model/userModel')
const bcrypt = require('bcrypt');
require('dotenv').config()
var jwt = require('jsonwebtoken');

const saltRounds = 10;

const getUser = async (req, res) => {
    try {
        const alluser = await user.findAll();
        res.send(alluser)
    } catch (e) {
        res.send(e);
    }
}

const addUser = (req, res) => {
    let {username, password, email} = req.body;
    // console.log(req)
    try {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, async (err, hash) => {
                // Store hash in your password DB.
                try {
                    console.log(hash)
                    const newUser = await user.create({
                        username,
                        password: hash,
                        email,
                    })
                    res.send({
                        status: 'ok',
                        desc: `${username} sudah ditambahkan`,
                    });
                } catch (e) {
                    res.send(e)
                }
            });
        });
        
    } catch (e) {
        res.send(e);
    }
}

const editUser = async (req, res) => {
    let {newuser, newpassword, newemail, id} = req.body;
    try {
        await user.update({
            username: newuser,
            password: newpassword,
            email: newemail,
        },  {
            where: {
                id: id
            }
        });
        res.send('user sudah diedit');
    } catch (e) {
        console.log(e)
    }
}

const deleteUser = async (req, res) => {
    let {id} = req.body;
    try {
        await user.destroy({
            where: {
                id
            }
        })
        res.send('terhapus')
    } catch (e) {
        res.send(e);
    }
}

const loginUser = async (req, res) => {
    const {username, password} = req.body;

    try {
        let login = await user.findOne({where: {username}})
        
        if (login){
            bcrypt.compare(password, login.password, (err, result) => {
                if (result === true){
                    var token = jwt.sign({ username: login.username }, process.env.SALT);
                    res.set("Authorization", `Bearer ${token}` )
                    res.send({
                        status: 'ok',
                        desc: 'Login    Sukses'
                    })
                    return;
                }
                res.send({
                    status: 'Gagal',
                
                })
                
                
                // result == true
            });
        } else {
            res.send({
                status: 'User not Found'
            })
        }
    } catch (e) {
       res.send(e) 
    }  
}

module.exports = {
    getUser,
    addUser,
    editUser,
    deleteUser,
    loginUser
}