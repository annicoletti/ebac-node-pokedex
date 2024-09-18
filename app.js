const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const pokemonsRouter = require('./routes/pokemons');
const { connect } = require('./models');

const app = express();

//configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);


//declarando rotas
const port = 3000;
app.use('/pokemons', pokemonsRouter);

app.listen(port, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${port}`);
});