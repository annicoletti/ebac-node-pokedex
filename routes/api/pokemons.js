const express = require('express');
const { Pokemon } = require('../../models');

const router = express.Router();

// Create
router.post('/', async (req, res) => {
    I
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json({
            sucesso: true,
            pokemon: pokemon
        })
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e
        })
    }
});

// Read
router.get('/', async (req, res) => {
    try {
        const filtros = req.query;
        const options = {};

        if(filtros.nomeComecaCom){
            options.nome = {
                $regex: filtros.nomeComecaCom + '.*'
            }
        }

        const pokemons = await Pokemon.find(options);
        res.status(201).json({
            sucesso: true,
            pokemons: pokemons
        });
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e
        });
    }
})



module.exports = router;