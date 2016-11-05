'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var express = require('express');
var path = require('path');

var server = express();

// serve static assets normally
server.use(express.static(path.resolve(__dirname, '../../dist')));

// Handles all routes so you do not get a not found error
server.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

exports.default = server;