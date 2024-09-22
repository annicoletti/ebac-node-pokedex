const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const createError = require('http-errors');

const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const capturaRouter = require('./routes/api/captura');

const { connect } = require('./models');
const { create } = require('domain');
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

//tratamento de erro, caso não de match em nenhuma, tratamos o 404
app.use((req, res, next) => {
    next(createError(404))
});

//tratativa de erro genérico
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro: err,
    })
});

const port = 3000;
app.listen(port, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${port}`);
});