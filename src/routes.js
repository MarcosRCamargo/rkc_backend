const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    let $nome = req.query.name;
    return res.json({ message: `Olá ${ $nome}` });
});

routes.post('/devs', (req, res) => {
    console.log();
    return res.json(req.body);
});
module.exports = routes;