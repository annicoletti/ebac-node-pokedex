const express = required('express');
const { Pokemon } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    Pokemon.find().then(pokemons => {
        res.render('paginas/pokemons/index', {
            pokemons,
        });
    });
});

module.exports = router;