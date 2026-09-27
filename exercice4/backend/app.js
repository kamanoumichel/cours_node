const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Importation de express ejs layouts
const expressLayouts = require('express-ejs-layouts');
//Ajout du middleware
app.use(expressLayouts);
app.set('layout', '../views/layouts/layout');

app.get("/", (req, res) => {
  res.render('pages/home')
})

app.get("/about", (req, res) => {
  res.render('pages/about');
})
app.get("/*path", (req, res) => {
  res.redirect('/')
})

module.exports = app;

