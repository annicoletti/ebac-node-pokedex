const jwt = require('jsonwebtoken');
const { Usuario } = require('../../../models');

const checaAutenticacao = async (req, res, next) => {

    try {
        const jwtUsuario = req.headers.authorization.replace('Bearer ', '');
        const email = (await jwt.verify(jwtUsuario, process.env.SEGREDO_JWT)).email;

        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            throw 'Usuário não encontrado!';
        }

        req.usuario = usuario;
        console.log("🚀 ~ checaAutenticacao ~ usuario:", usuario)

        next();
    } catch (e) {
        res.status(401).json({
            sucesso: false,
            erro: 'Faça login para acessar essa rota.',
        })
    }
}

module.exports = { checaAutenticacao };