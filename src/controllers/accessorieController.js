const db = require('../database/models');
const Accessorie = db.Accessorie;

const accessorieController = {
    list: (req, res) => {
        Accessorie.findAll()
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json(err) //internal error
        })

    },
    getProduct: (req, res) => {
        Accessorie.findByPk(req.params.id)
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
    createProduct: (req, res) => {
        Accessorie.create(req.body)
        .then(games => {
            res.status(201).json(games)
        })
        .catch(err => {
            res.status(400).json(err) //400 BAD request
        })
    },
    updateProduct: (req, res) => {
        Accessorie.update(req.body,{
                
            where : {
                id_games: req.params.id
            }    
        })
        .then(games => {
            res.status(201).json(games)
        })
        .catch(err => {
            res.status(304).json(err) //304 not modified
        })

    },
    deleteProduct: (req, res) => {
        Accessorie.destroy({
            where : {
                id_games: req.params.id
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

module.exports = accessorieController;