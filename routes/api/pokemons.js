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

        if (filtros.nomeComecaCom) {
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

//Read (find one)
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ _id: req.params.id });
        res.status(201).json({
            sucesso: true,
            pokemon: pokemon
        });
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: `pokémon não encontrado ${e}`
        });
    }
})

//Update
router.patch('/:id', async (req, res) => {

    try {
        const pokemon = await Pokemon.findOne({ _id: req.params.id });

        Object.keys(req.body).forEach(atributo => {
            pokemon[atributo] = req.body[atributo];
        })

        await pokemon.save();

        res.json({
            sucess: true,
            pokemon: pokemon,
        })
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e
        });
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        const pokemonId = req.params.id;
        const options = { _id: pokemonId };

        await Pokemon.deleteOne(options);
        // await Pokemon.delete({ _id: pokemonId });
        res.json({
            status: true,
            pokemon: pokemon
        })

    } catch (e) {
        res.json({
            status: false,
            message: e
        })
    }

});

module.exports = router;