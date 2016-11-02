const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// serve static assets normally
app.use(express.static(path.resolve(__dirname, '../../dist')));

// Handles all routes so you do not get a not found error
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

app.listen(port);
// eslint-disable-next-line no-console
console.log(`server started on port ${port}!`);
