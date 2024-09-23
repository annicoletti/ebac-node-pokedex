require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { connect, Pokemon, Usuario } = require('./models');


const populaBancoDeDados = async () => {
    connect();

    const seedPokemons = [
        {
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
        },
        {
            id: 695,
            nome: "heliolisk",
            altura: 10,
            peso: 210,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png",
            ataques: "dry-skin, sand-veil, solar-power",
            estatisticas: {
                hp: 62,
                attack: 55,
                defense: 52,
                'special-attack': 109,
                'special-defense': 94,
                speed: 109
            }
        },
        {
            id: 497,
            nome: "serperior",
            altura: 33,
            peso: 630,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png",
            ataques: "overgrow, contrary",
            estatisticas: {
                hp: 75,
                attack: 75,
                defense: 95,
                'special-attack': 75,
                'special-defense': 95,
                speed: 113
            }
        },
        {
            id: 511,
            nome: "pansage",
            altura: 6,
            peso: 105,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png",
            ataques: "gluttony, overgrow",
            estatisticas: {
                hp: 50,
                attack: 53,
                defense: 48,
                'special-attack': 53,
                'special-defense': 48,
                speed: 64
            }
        },
        {
            id: 500,
            nome: "emboar",
            altura: 16,
            peso: 1500,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png",
            ataques: "blaze, reckless",
            estatisticas: {
                hp: 110,
                attack: 123,
                defense: 65,
                'special-attack': 100,
                'special-defense': 65,
                speed: 65
            }
        },
        {
            id: 617,
            nome: "accelgor",
            altura: 8,
            peso: 253,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png",
            ataques: "hydration, sticky-hold, unburden",
            estatisticas: {
                hp: 80,
                attack: 70,
                defense: 40,
                'special-attack': 100,
                'special-defense': 60,
                speed: 145
            }
        },
        {
            id: 635,
            nome: "hydreigon",
            altura: 18,
            peso: 1600,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png",
            ataques: "levitate",
            estatisticas: {
                hp: 92,
                attack: 105,
                defense: 90,
                'special-attack': 125,
                'special-defense': 90,
                speed: 98
            }
        },
        {
            id: 1016,
            nome: "fezandipiti",
            altura: 14,
            peso: 301,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png",
            ataques: "toxic-chain, technician",
            estatisticas: {
                hp: 88,
                attack: 91,
                defense: 82,
                'special-attack': 70,
                'special-defense': 125,
                speed: 99
            }
        },
        {
            id: 964,
            nome: "palafin",
            altura: 13,
            peso: 602,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png",
            ataques: "zero-to-hero, zero-to-hero",
            estatisticas: {
                hp: 100,
                attack: 70,
                defense: 72,
                'special-attack': 53,
                'special-defense': 62,
                speed: 100
            }
        },
        {
            id: 1007,
            nome: "koraidon",
            altura: 25,
            peso: 3030,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
            ataques: "orichalcum-pulse, orichalcum-pulse",
            estatisticas: {
                hp: 100,
                attack: 135,
                defense: 115,
                'special-attack': 85,
                'special-defense': 100,
                speed: 135
            }
        }
    ]

    // Seed 10 pokémons
    await Pokemon.create(seedPokemons);

    // Seed usuário
    await Usuario.create({
        email: 'andre.nicoletti@live.com',
        nome: 'André Nicoletti',
        senha: await bcrypt.hash('1234', 10),
    })

    mongoose.disconnect();
};

populaBancoDeDados();