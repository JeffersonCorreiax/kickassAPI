const express = require('express');
const router = express.Router();

const accessorieController = require('../controllers/accessorieController');

router.get('/', accessorieController.list);
router.get('/:id', accessorieController.getProduct);
router.post('/', accessorieController.createProduct);
router.put('/:id', accessorieController.updateProduct);
router.delete('/:id', accessorieController.deleteProduct);


module.exports = router; 