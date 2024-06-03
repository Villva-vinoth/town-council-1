const { login} =require('./user.controllers')

// const {register ,login }= require('./users.Controllers');

const express = require('express');

const router =express.Router();


router.post('/login',login);

module.exports = router;

