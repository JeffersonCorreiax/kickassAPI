const db = require('../database/models');
const Contact = db.Contact;

const contactController = {
    list: (req, res) => {
        Contact.findAll()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err) //internal error
        })

    },
    getContact: (req, res) => {
        Contact.findByPk(req.params.id )
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
    createContact: (req, res) => {
        Contact.create(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(400).json(err) //400 BAD request
        })
    },
    updateContact: (req, res) => {
        Contact.update(req.body,{
                
            where : {
                id_contact: req.params.id
            }    
        })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(304).json(err) //304 not modified
        })

    },
    deleteContact: (req, res) => {
        Contact.destroy({
            where : {
                id_contact: req.params.id
            }
        })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
    
}

module.exports = contactController;

