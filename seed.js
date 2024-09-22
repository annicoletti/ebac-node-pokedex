require('dotenv').config();

const { connect, Pokemon } = require('./models');

const mongoose = require('mongoose');

const populaBancoDeDados = async () => {
    connect();

    await Pokemon.create({
        id: 102,
        nome: 'exeggcute',
        altura: 4,
        peso: 25,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png',
        ataques: 'chlorophyll, harvest',
        estatisticas: {
            hp: 60,
            attack: 40,
            defense: 80,
            'special-attack': 60,
            'special-defense': 45,
            speed: 40
        }
    });

    mongoose.disconnect();
};

populaBancoDeDados();