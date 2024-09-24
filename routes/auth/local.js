const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const { Usuario } = require('../../models');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (nomeDeUsuario, senha, done) => {

    try {
        const usuario = await Usuario.findOne({ email: nomeDeUsuario });
        if (!usuario) {
            return done(null, false);
        }

        const aSenhaEstaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (aSenhaEstaCorreta) {
            return done(null, usuario);
        } else {
            return done(null, false);
        }

    } catch (e) {
        done(e, false);
    }

}));

// Salva na sessão o usuário
passport.serializeUser((usuario, done) => {
    done(null, usuario._id);
});

//Recuperando da sessão o usuário
passport.deserializeUser(async (id, done) => {
    let erro, usuario;
    try {
        usuario = await Ususario.findById(id);
    } catch (e) {
        erro = e;
    }
    done(erro, usuario);
});