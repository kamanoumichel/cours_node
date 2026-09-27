const mongoose = require('mongoose');

// Valeurs par défaut si les variables .env sont absentes
const host = process.env.MONGO_HOST || '127.0.0.1';
const portmongo = process.env.MONGO_PORT || '27017';
const db_name = 'movies_db';

// Correction : Pas d'espace au début et retrait des options Atlas pour le local
const mongoDB = `mongodb://${host}:${portmongo}/${db_name}`;

mongoose.connect(mongoDB)
  .then(() => console.log('MongoDB OK !'))
  .catch((err) => console.error('MongoDB ERREUR !', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error :'));