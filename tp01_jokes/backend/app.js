const express = require('express');

const app = express();

//dossier public (pour le css, etc...)
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
//définition du view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout','layouts/layout');

console.log()

//---- ROUTAGE ---

const jokesRouter = require('./routers/jokesRouter');
app.use('/',jokesRouter);


app.use('/*path',(req, res)=>{
    res.redirect('/jokes/list');
});



module.exports = app;