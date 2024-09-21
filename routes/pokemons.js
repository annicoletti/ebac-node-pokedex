const express = require('express');
const { Pokemon } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    Pokemon.find().then(pokemons => {

        pokemons.forEach(pokemon => {
            const data = new Date(pokemon._id.getTimestamp());
            pokemon.capturadoEm = `${data.getUTCDate()}/${data.getUTCMonth() + 1}/${data.getUTCFullYear()}`;
        })

        res.render('paginas/pokemons/index', {
            pokemons,
        });
    });
});

module.exports = router;