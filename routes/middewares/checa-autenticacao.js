const checaAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/auth');
    }
}

const checaNaoAutenticado = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/');
    }
}

module.exports = {
    checaAutenticado,
    checaNaoAutenticado
}