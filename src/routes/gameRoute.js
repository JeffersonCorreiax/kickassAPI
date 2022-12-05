const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.get('/', gameController.list);
router.get('/:id', gameController.getProduct);
router.post('/', gameController.createProduct);
router.put('/:id', gameController.updateProduct);
router.delete('/:id', gameController.deleteProduct);


module.exports = router;