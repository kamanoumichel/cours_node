const express = require('express');

const app = express();

//Middleware déclanché quelle que soit la requête
app.use((req,res, next)=>{
    const now = new Date().toDateString();
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    next();    
});

//Route déclenchée uniquement pour une méthode GET sur l'url "/"
app.get("/",(req, res)=>{
    res.send("<h1>Bienvenue sur la HOME PAGE</h1>");
});

//Route déclanchée uniquement pour une méthode GET sur l'URL "/about"
app.get("/about",(req, res)=>{
    res.send("<p>Ce cours est inspiré de la documentation Express.</p>");
});

//Route déclenchée pour toute requête GET non matchée précédemment
//ATTENTION : L'ORDRE DE DECLARETION EST IMPORTANT
//On peut décidé de redirigé un au lieu d'envoyer un msg
//Et on aura donc
app.get("/*path",(req,res)=>{
    res.redirect('/')
    //res.send("<p>... je ne sais pas quoi dire...</p>");
});

module.exports = app;
