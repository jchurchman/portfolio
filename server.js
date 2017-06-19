'use strict';

const express = require('express');
const pg = require('pg');
const fs = require('fs'); //eslint-disable-line
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config(); //eslint-disable-line
const requestProxy = require('express-request-proxy');
const conString = process.env.DATABASE_URL;

const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('./data/abouts.json', (req, res) => res.sendFile('abouts.json', { root: './public' }));

function proxyGitHub( request, response ) {
    console.log( 'Routing GitHub request for', request.params[0] );
    requestProxy({
        url: `https://api.github.com/${request.params[0]}`,
        headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
    })( request, response );
}

app.get('/github/*', proxyGitHub);

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function () {
    console.log(`On port ${PORT}? Yup!`);
});