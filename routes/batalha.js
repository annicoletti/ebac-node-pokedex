const express = require('express');
const buscaInfoPokemon = require('../services/busca-pokemon');

const router = express.Router();

router.get('/', (req, res) => {
    const pokemonIdRandomico = Math.round(Math.random() * 1025 + 1);
    console.log(pokemonIdRandomico);

    buscaInfoPokemon(pokemonIdRandomico).then(pokemon => {
        res.render('paginas/batalha/index', {
            pokemon,
        });
    })

});

module.exports = router;