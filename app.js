const express = require('express');
const pokemonsRouter = require('./routes/pokemons');
const { connect } = require('./models');

const app = express();

//declarando rotas
app.use('/pokemons', pokemonsRouter);

app.listen(3000, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${porta}`);
});