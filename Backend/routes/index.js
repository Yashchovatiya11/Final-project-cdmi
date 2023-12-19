var express = require('express');
var router = express.Router();

var { register_user, login_user, logout_user,delete_user,update_user,all_user,send_otp,forget_pass } = require('../controller/usercontroller');

// login and register API

router.post('/register',register_user);

router.post('/login',login_user);

router.post('/logout',logout_user);

router.post('/send_otp',send_otp);

router.post('/forget_password',forget_pass);

router.get('/alluser',all_user);

router.post('/delete/:id',delete_user);

router.post('/update/:id',update_user);



module.exports = router;
