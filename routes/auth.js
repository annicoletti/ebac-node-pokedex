const express = require("express");
const passport = require("passport");
const { checaAutenticado, checaNaoAutenticado } = require('./middewares/checa-autenticacao');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('paginas/login', {
        error: req.query.erroNoLogin,
    });
});

router.get('/logout', checaAutenticado, async (req, res) => {
    req.logOut(req.user, (err) =>{
        if(!err){
            return res.redirect('/auth');
        } else {
            next(err)
        }
    });
});

router.post('/login', checaNaoAutenticado, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth?erroNoLogin=true'
}));

module.exports = router;