const express = require('express');
const router = express.Router();
const userController = require('../controllers/jobController')

//User's APIs -> Authentication required.
router.post('/register', userController.createJob)
router.get("/getAllJob",userController.getAllJob)
router.post('/CreateUser', userController.createuser)
router.post('/login', userController.loginUser)

module.exports = router;