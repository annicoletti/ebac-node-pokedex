const express = require('express');
const { Usuario } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();


router.post('/login', async (req, res) => {
    try {

        const email = req.body.email;
        console.log("🚀 ~ router.post ~ email:", email)

        const usuario = await Usuario.findOne({ email: email });
        console.log("🚀 ~ router.post ~ usuario:", usuario)

        const senhaEstaCorreta = await bcrypt.compare(req.body.senha, usuario?.senha || '');

        if (senhaEstaCorreta) {
            res.json({
                success: true,
                jwt: jwt.sign({
                    email: usuario.email,
                }, process.env.SEGREDO_JWT)
            })
        } else {
            res.status(401).json({
                sucess: false,
                erro: 'Email ou senha inválidos',
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            erro: e,
        })
    }
});

module.exports = router;