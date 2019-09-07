const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://semana8:semana8@cluster0-zhujk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(express.json());
server.use(routes);
server.listen(3333)