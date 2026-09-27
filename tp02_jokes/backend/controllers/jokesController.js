module.exports.home = (req, res) =>{
    res.render('pages/all');
}

module.exports.random = (req, res) =>{
    res.render('pages/random');
}

// module.exports = {home, }
const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
module.exports.logFile = async(req, res) => {
  try {
    const filePath = resolve('D:/Projet/cours_node/tp01_jokes/backend/data/jokes.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const content = JSON.parse(contents)
    const jokes = content.map(element => element.joke) 
    res.render('pages/all', {jokes,content})
    // res.render('pages/all', )
  } catch (err) {
    console.error(err.message);
  }
}
module.exports.logFilerandom = async(req, res) => {
  try {
    const filePath = resolve('D:/Projet/cours_node/tp01_jokes/backend/data/jokes.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const content = JSON.parse(contents)
    
    
    const i = Math.floor(Math.random()* (content.length-1));
    const jokes = content[i].joke;
    res.render('pages/random', {jokes});
    // res.render('pages/all', )
  } catch (err) {
    console.error(err.message);
  }
}

// Afficher une blague selon son ID
module.exports.getJokeById = async (req, res) => {
  try {
     const filePath = resolve('D:/Projet/cours_node/tp01_jokes/backend/data/jokes.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const content = JSON.parse(contents)
    const jokeId = req.params.id;
    const joke = content.find(item => item.id === jokeId);
    console.log(jokeId);
    
    res.render('pages/show_jokes', { joke });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur lors de la recherche de la blague.");
  }
};


