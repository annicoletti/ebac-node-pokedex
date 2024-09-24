const { Schema } = require('mongoose');

const PokemonSchema = new Schema({

    id: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
        min: 0,
    },
    peso: {
        type: Number,
        required: true,
        min: 0,
    },
    imagem: {
        type: String,
        required: true,
        validate: {
            validator: (valor) => {
                return valor && valor.startsWith('http');
            },
            message: () => { "a imagem deve ser uma url absoluta" }
        }
    },
    ataques: {
        type: String,
        required: true,
    },
    estatisticas: {
        type: Object,
        required: true,
    },
    capturadoPor: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },

});


PokemonSchema.index({ capturadoPor: 1 });

module.exports = PokemonSchema;