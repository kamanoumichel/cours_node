require('./mongoose_init');
const Movie = require('../models/movie');
module.exports.home = (req, res)=>{
    res.render('pages/home');
}



module.exports.list = async (req, res)=>{
    try{
        const movies = await Movie.find();
        res.render('pages/moviesList',{movies});

    } catch(err){
        console.log('Erreur lors de la récupération des filmes :', err);
        res.status(500).send('Erreur serveur');
    }
   
}