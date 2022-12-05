const db = require('../database/models');
const Game = db.Game;

const gameController = {
    list: (req, res) => {
        Game.findAll()
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json(err) //internal error
        })

    },
    getProduct: (req, res) => {
        Game.findByPk(req.params.id)
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
        Game.create(req.body)
        .then(games => {
            res.status(201).json(games)
        })
        .catch(err => {
            res.status(400).json(err) //400 BAD request
        })
    },
    updateProduct: (req, res) => {
        Game.update(req.body,{
                
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
        Game.destroy({
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

module.exports = gameController;