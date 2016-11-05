const express = require('express');
const path = require('path');

const server = express();

// serve static assets normally
server.use(express.static(path.resolve(__dirname, '../../dist')));

// Handles all routes so you do not get a not found error
server.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

export default server;
