const axios = require('axios');

const buscaInfoPokemon = (pokeId) => {

    return new Promise(async (resolve, reject) => {

        const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

        try {
            const resultado = await axios.get(url);
            const data = resultado.data;

            const id = data.id;
            const nome = data.name;
            const altura = data.height;
            const peso = data.weight;
            const imagem = data.sprites.other['official-artwork'].front_default;
            const ataques = data.abilities.map(a => a.ability.name).join(', ');
            const jogos = [];

            data.game_indices.forEach(game => jogos.push(game.version.name));

            const estatisticas = {};
            data.stats.forEach(element => {
                estatisticas[element.stat.name] = element.base_stat;
            });

            resolve({
                id,
                nome,
                altura,
                peso,
                imagem,
                ataques,
                estatisticas,
                jogos,
            })
        } catch (e) {
            e => reject(e)
        }
    });

}

module.exports = buscaInfoPokemon;