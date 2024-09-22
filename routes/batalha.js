const express = require('express');
const buscaInfoPokemon = require('../services/busca-pokemon');

const router = express.Router();

router.get('/', async (req, res) => {
    const pokemonIdRandomico = Math.round(Math.random() * 1025 + 1);
    console.log("🚀 ~ router.get ~ pokemonIdRandomico:", pokemonIdRandomico)

    const infoPokeomon = await buscaInfoPokemon(pokemonIdRandomico);
    res.render('paginas/batalha/index', {
        pokemon: infoPokeomon,
    });

});

module.exports = router;