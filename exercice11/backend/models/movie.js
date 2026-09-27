const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    //NB : le champ _id est automatiquement crée
    title : {type: String, requires : true},
    synopsis : { type : String, default : "No sypnosis available yet !"}
});

module.exports = mongoose.model('Movie', movieSchema);
