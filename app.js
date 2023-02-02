const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('First middle ware');
    next();
});

app.use((req, res, next) => {
    console.log('Second middle ware');
});

app.listen(3003);