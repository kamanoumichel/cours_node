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

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const appRouter = require('./routes/appRouter');
app.use('/', appRouter);

// --- Traitement des données du formulaire par méthode POST ---
// (la même route '/form' mais différenciée par la méthode POST)
app.post('/form',(req, res, next)=>{
    let data = req.body;
   //NB : ne pas envoyer au render une option nommée 'body'
  //car cela interfèrerait avec express-ejs-layouts !
    res.render('pages/show_post_data',{data});
});


app.use('/*path',(req, res)=>{
    res.redirect('/');
});


module.exports = app;