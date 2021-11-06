// importing npm packages
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

// rendering the home page
app.get('', (req, res) => {
	res.render('index', {});
});

// rendering the go local page
app.get('/local/shops', (req, res) => {
	res.render('local', {});
});

// rendering the shop page
app.get('/local/shops/shopx', (req, res) => {
	res.render('shopx', {});
});

// checkout page
app.get('/local/shops/shopx/checkout', (req,res) => {
	res.render('checkout', {});
});

// 404 page
app.get('*', (req, res) => {
	res.render('404');
});

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

