const express = require('express');

const router = express.Router();

// const middleware = (req, res, next) => {
//     console.log("tenho acessp a toda req: ", req );
//     next();
// }

// router.get('/', middleware, (req, res) => {
//     res.json({ status: 'ok' });
// });

router.get('/', (req, res) => {
    res.json({ status: 'ok' });
});


module.exports = router;