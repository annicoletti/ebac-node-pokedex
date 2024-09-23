const express = require('express');
const cors = require('cors');

//configurando cors
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}


// importando routes
const capturaRouter = require('./captura');
const statusRouter = require('./status');
const pokemonsRouter = require('./pokemons');

const router = express.Router();

// declarando as rotas
router.use('/captura', cors(corsOptions), capturaRouter);
router.use('/status', cors(corsOptions), statusRouter);
router.use('/pokemons', cors(corsOptions), pokemonsRouter);

module.exports = router;