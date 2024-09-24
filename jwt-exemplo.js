const jwt = require('jsonwebtoken');

const primeiroJwt = jwt.sign(
    {
        nome: 'André',
        sobrenome: 'Nicoletti',
        exp: Math.floor(Date.now() / 1000) + 2, //2 segundos a partir de agora
    },
    'chave-super-secreta'
);

setTimeout(() => {
    console.log('JWT ainda é válido?', jwt.verify(primeiroJwt, 'chave-super-secreta'));
}, 1000);