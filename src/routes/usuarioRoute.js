const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.get('/:id', usuarioController.getUser);
router.post('/', usuarioController.createUser);
router.put('/:id', usuarioController.updateUser);
router.delete('/:id', usuarioController.deleteUser);




module.exports = router;