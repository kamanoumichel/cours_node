const express = require('express');
const app = express();

//dossier public (pour le css, etc.)
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// définition du view engine
app.set('view engine', 'ejs');// npm install --save ejs
app.set('views', path.join(__dirname, 'views'));

//layout
const expressLayouts = require('express-ejs-layouts'); //npm install express-ejs-layouts
app.use(expressLayouts);
app.set('layout', '../views/layouts/layout');//définit le layout par défaut

// --- Routage ---
const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);

const researchRouter = require('./routes/researchRouter');
app.use('/research', researchRouter);

const teachingRouter = require('./routes/teachingRouter');
app.use('/teaching', teachingRouter);

/* app.get("/",(req,res)=>{
  res.send('<h1>Bienvenue chez mkgm</h1>');
  });
 
app.get("/research", (req, res) => {
    res.send("<h1>Travaux de Recherche</h1>");
});

app.get('/teaching', (req, res) => {
    res.send('<h1>Enseignements</h1>') ;
});

app.get('/teaching/javascript', (req, res) => {
    res.send('<h1>Cours de JavaScript</h1>') ;
});

app.get('/teaching/php', (req, res) => {
    res.send('<h1>Cours de PHP</h1>') ;
});

app.get('/teaching/node', (req, res) => {
    res.send('<h1>Introduction à Node.js</h1>') ;
});

app.get('/teaching/node/express', (req, res) => {
    res.send('<h1>Cours sur le framework Express</h1>') ;
});


app.get('/*path', (req, res) => { 
    res.redirect('/')
});
 */
module.exports = app