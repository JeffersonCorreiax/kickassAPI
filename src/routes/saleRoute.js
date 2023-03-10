const express = require('express');
const router = express.Router();

const saleController = require('../controllers/saleController');

router.get('/', saleController.list);
router.get('/:id', saleController.getSale);
router.post('/', saleController.createSale);
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);


module.exports = router;