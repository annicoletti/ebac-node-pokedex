const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const capturaRouter = require('./routes/api/captura');

const { connect } = require('./models');
const app = express();

//configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// configurando arquivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

//declarando rotas
app.use('/pokemons', pokemonsRouter);
app.use('/batalha', batalhaRouter);

//declarando rotas api
app.use('/api', capturaRouter);

const port = 3000;
app.listen(port, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${port}`);
});