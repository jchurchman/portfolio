'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('./data/abouts.json', (req, res) => res.sendFile('abouts.json', { root: './public' }));

app.listen(PORT, function () {
    console.log(`On port ${PORT}? Yup!`);
});