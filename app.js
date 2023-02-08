const http = require('http');
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('ss');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('First middle ware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
});

app.use('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Second middleware');
    res.send('<h1>Main Page</h1>');
});

app.listen(3003);