const express = require('express');
const router = express.Router();

const {getUser, addUser, editUser, deleteUser, loginUser} = require('../controller/userControler');
const { getUserDetails, addUserDetails, editUserDetails, deleteUserDetails } = require('../controller/userDetailsControler');
const middlewareAuth = require('../middleware/middlewareAuth');

router.get('/getuser' , middlewareAuth, getUser);
router.post('/adduser' , addUser);
router.put('/edituser' , middlewareAuth, editUser);
router.delete('/deleteuser' , middlewareAuth, deleteUser);
router.post('/login' , loginUser);
router.get('/getuserdetails' , middlewareAuth, getUserDetails);
router.post('/adduserdetails' , middlewareAuth, addUserDetails);
router.put('/edituserdetails' , middlewareAuth, editUserDetails);
router.delete('/deleteuserdetails' , middlewareAuth, deleteUserDetails);

module.exports = router;