const Movie = require('../models/movie');

module.exports.list =(req, res)=>{
    Movie.find() //récupère tous les Movie
    .sort({title:'asc'}) //trie par 'title' ascendant
    .then(movies=>{
        res.render('pages/moviesList',{movies});
    })
    .catch(error=>res.status(400).send(error)) //à améliorer !
}