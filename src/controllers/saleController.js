const db = require('../database/models');
const Sale = db.Sale;

const saleController = {
    list: (req, res) => {
        Sale.findAll()
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json(err) //internal error
        })

    },
    getSale: (req, res) => {
        Sale.findByPk(req.params.id)
        .then(games => {
           if(!games){
            res.status(404).json(games) //404 not found
           }else{
            res.status(200).json(games)
           } 
        })
        .catch(err => {
            res.status(500).json(err)
        })

    },
    createSale: (req, res) => {
        Sale.create(req.body)
        .then(games => {
            res.status(201).json(games)
        })
        .catch(err => {
            res.status(400).json(err) //400 BAD request
        })
    },
    updateSale: (req, res) => {
        Sale.update(req.body,{
                
            where : {
                id_sales: req.params.id
            }    
        })
        .then(games => {
            res.status(201).json(games)
        })
        .catch(err => {
            res.status(304).json(err) //304 not modified
        })

    },
    deleteSale: (req, res) => {
        Sale.destroy({
            where : {
                id_sales: req.params.id
            }
        })
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = saleController;