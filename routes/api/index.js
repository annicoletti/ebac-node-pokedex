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
const autenticacaoRouter = require('./autenticacao');

//importando middlewares
// const { checaAutenticacao } = require('./middlewares/checa-autenticacao')
const { checaAutenticado } = require('../middewares/checa-autenticacao')

const router = express.Router();
router.use(express.json());

// declarando as rotas
// router.use('/captura', cors(corsOptions), checaAutenticacao, capturaRouter);
router.use('/captura', cors(corsOptions), checaAutenticado, capturaRouter);
router.use('/status', cors(corsOptions), statusRouter);
// router.use('/pokemons', cors(corsOptions), checaAutenticacao, pokemonsRouter);
router.use('/pokemons', cors(corsOptions), checaAutenticado, pokemonsRouter);
router.use('/autenticacao', cors(corsOptions), autenticacaoRouter);

module.exports = router;