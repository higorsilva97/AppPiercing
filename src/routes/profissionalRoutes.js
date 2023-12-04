const express = require('express')

const Profissional = require("../models/profissionalModel")

const router = express.Router()

const path = require('path')


router.post("/profissional", async(req, res) => {
    const profissional = new Profissional({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        servicos: req.body.servicos
    });

    try{
       const novoProfissional =  await profissional.save();
       res.status(201).json(novoProfissional);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
