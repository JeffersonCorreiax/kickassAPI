
const db = require('../database/models');
const Usuario = db.Usuario;

const usuarioController = {
    list: (req, res) => {
        Usuario.findAll()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err) //internal error
        })

    },
    getUser: (req, res) => {
        Usuario.findByPk(req.params.id )
        .then(user => {
           if(!user){
            res.status(404).json(user) //404 not found
           }else{
            res.status(200).json(user)
           } 
        })
        .catch(err => {
            res.status(500).json(err) // internal error
        })

    },
    createUser: (req, res) => {
        Usuario.create(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(400).json(err) //400 BAD request
        })
    },
    updateUser: (req, res) => {
        Usuario.update(req.body,{
                
            where : {
                id_usuarios: req.params.id
            }    
        })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(304).json(err) //304 not modified
        })

    },
    deleteUser: (req, res) => {
        Usuario.destroy({
            where : {
                id_usuarios: req.params.id
            }
        })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },
    getUserByEmail: (req, res) => {
        Usuario.findOne({
            where: {
                email: req.params.email
            }
        })
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'Usuário não encontrado' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Erro interno' });
        });
    }
}

module.exports = usuarioController;