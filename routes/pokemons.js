const express = require('express');
const { Pokemon } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {

    const pokemons = await Pokemon.find();
    pokemons.forEach(pokemon => {
        const data = new Date(pokemon._id.getTimestamp());
        pokemon.capturadoEm = `${data.getUTCDate()}/${data.getUTCMonth() + 1}/${data.getUTCFullYear()}`;
    })

    res.render('paginas/pokemons/index', {
        pokemons,
    });

});

router.get('/:id', (req, res) => {
    Pokemon.findOne({ _id: req.params.id }).then(pokemon => {
        res.render('paginas/pokemons/show', {
            pokemon,
            message: req.query.message,
        })
    }).catch(e => {
        res.status(404).render('paginas/erro', {
            mensagem: "Pokémon não encontrado!!",
            erro: {},
        })
    })
});

module.exports = router;