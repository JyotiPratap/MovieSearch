const express = require('express');
const router = express.Router();
const userController = require('../controllers/jobController')

//User's APIs -> Authentication required.
router.post('/register', userController.createJob)
router.get("/getAllUser",userController.getAllJob)

module.exports = router;