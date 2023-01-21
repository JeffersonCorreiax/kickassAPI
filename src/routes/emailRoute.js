const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');


router.get('/user/:email', usuarioController.getUserByEmail);




module.exports = router;
