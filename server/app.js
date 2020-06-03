// import files and packages up here
const morgan = require('morgan');
const express = require('express');
const http = require('http');
const data = require('./data.json')

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.status(200).send('New Express Server Up and Running!');
})

app.get('/data', function(req, res) {
    res.json(data);
})

// finally export the express application
module.exports = app;
