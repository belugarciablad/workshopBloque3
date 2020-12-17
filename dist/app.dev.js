"use strict";

var _require = require('express'),
    Router = _require.Router;

var express = require('express');

var _require2 = require('./db'),
    db = _require2.db;

var app = express();

var routes = require('./routes');

app.use(express.json());
app.use('/', routes());
app.listen(3000, function () {
  console.log('api escuchando en puerto 3000');
});