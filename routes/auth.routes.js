const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const authController = require('../controllers/auth.controller')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;