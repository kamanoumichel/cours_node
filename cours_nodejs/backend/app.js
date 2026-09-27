const express = require('express'); //inclusion d'express

//Instanciation d'une application express

const app = express();

const path = require('path');
//Ajoute un middleware qui retourne les documents situés sous le dossier /public.
//NB: il faut le mettre avant tout autres use qui modifie res
//pour que le cas des fichiers static soit bien traité en 1er dans la chaine des middlewares.
app.use(express.static(path.join(__dirname,'public')));

// Déinition du view engine :
// >moteur de rendu
app.set('view engine','ejs'); //Définition du moteur de rendu
app.set('views',path.join(__dirname,'views')); //Déclaration du dossier contenant les vues

// Importation de 'express-ejs-layouts':
const expressLayouts = require('express-ejs-layouts');

// Ajout du middleware :
app.use(expressLayouts);
// Définition du layout par défaut :
app.set('layout','../views/layouts/layout');

app.use((req,res)=>{
    res.render('pages/home',{user: 'Greg'});
});


//Configuration de l'application : une première gestion "basique" des requêtes.

//1er middleware : ex. d'affichage d'informations dans la console
/*app.use('/', (req,res,next)=>{
    //Une fois encore, les requêtes sont ^pour l'instant toutes traitées de la même manière.
    const now = new Date().toDateString();
    console.log(`${now}: une requête ${req.method} est arrivée !`);
    next();
});*/

//2ème middleware : préparation de la réponse
/*app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    //res.end('Le serveur Express dit <b>bonjour</b>');
    //console.log(req.method);
    next();
});

//3ème middleware : envoi de la réponse
app.use((req,res,next)=>{
    res.end('Le serveur Express dit <b>bonjour</b>');
})*/
/*app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
})*/
/*app.use('/', (req,res)=>{
    // demande de rendu EJS
    //res.render('pages/home',{user : 'Greg'}); //on donne le chemin dans views, et on omet le .ejs
    //res.render('pages/home',{nickname: req.query.nickname, sex: req.query.sex}); //on donne le chemin dans views, et on omet le .ejs
    // Récupération des arguments de l'URL avec fallback à null
    //const user =  {}*
    //console.log(req.query.nickname);
    //console.log(req.query.sex);
    //const nickname = req.query.nickname || null;
    //const sex = req.query.sex || null;
    const user ={
        nickname: req.query.nickname || null,
        sex: req.query.sex || null
    }
   //const {user}= req.body
   //console.log(user);
     res.render('pages/home', { nickname: user.nickname, sex: user.sex });
   // res.status(200).json(user);
    
});*/


//Exportation de notre application espress
module.exports = app;