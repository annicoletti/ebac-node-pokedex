const express = require('express');
const buscaInfoPokemon = require('../../services/busca-pokemon')
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/captura/:id', (req, res) => {
    const randomValue = Math.random();
    buscaInfoPokemon(req.params.id).then(pokemon => {
        const pokemonFoiCapturado = randomValue <= 0.4;

        console.log("🚀 ~ buscaInfoPokemon ~ req.params.id:", req.params.id)
        console.log("🚀 ~ buscaInfoPokemon ~ randomValue:", randomValue)
        console.log("🚀 ~ buscaInfoPokemon ~ pokemonFoiCapturado:", pokemonFoiCapturado)

        if (pokemonFoiCapturado) {
            Pokemon.create(pokemon).then(pokemonCapturado => {
                res.json({
                    capturado: true,
                    id: pokemonCapturado._id
                });
            }).catch(e => res.status(500).json({ erro: e }));
        }
    }).catch(e => res.status(404).json({ erro: 'Pokémon não encontrado' }));
});

module.exports = router;
