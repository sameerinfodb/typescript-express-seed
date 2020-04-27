import express = require('express');

const port: string | number = process.env.PORT || 1337;

const app = express();
app.listen(port);
app.use(express.static('public'));

console.log('Listing on port...' + port);
