const express = require('express');

// importando routes
const capturaRouter = require('./captura');
const statusRouter = require('./status');

const router = express.Router();

// declarando as rotas
router.use('/captura', capturaRouter);
router.use('/status', statusRouter);

module.exports = router;