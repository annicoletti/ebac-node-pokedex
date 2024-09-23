const express = require('express');
const buscaInfoPokemon = require('../../services/busca-pokemon')
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/:id', async (req, res) => {
    const randomValue = Math.random();

    try {
        const pokemon = await buscaInfoPokemon(req.params.id);
        const pokemonFoiCapturado = randomValue <= 0.4;

        console.log("🚀 ~ buscaInfoPokemon ~ req.params.id:", req.params.id)
        console.log("🚀 ~ buscaInfoPokemon ~ randomValue:", randomValue)
        console.log("🚀 ~ buscaInfoPokemon ~ pokemonFoiCapturado:", pokemonFoiCapturado)

        if (pokemonFoiCapturado) {

            try {

                const pokemonCapturado = await Pokemon.create(pokemon);
                res.json({
                    capturado: true,
                    id: pokemonCapturado._id,
                    jogos: []
                });
            } catch (e) {
                console.log("🚀 ~ router.post ~ e:", e)
                res.status(500).json({ erro: e })
            }

        } else {
            res.json({
                capturado: false
            })
        }

    } catch (e) {
        e.status(404).json({ erro: 'Pokémon não encontrado' })
    };
});

module.exports = router;
