const express = require('express');
const router = express.Router();

//Puisque researchRouter est lié au chemin '/research' dans app.js,
// le chemin '/' ci-dessous correspond en faite à '/research'+'/',
// soit '/research/' !

/*router.get('/', (req, res) => {
  res.send("<h1>Travaux de Recherche</h1>");
  });*/
const researchController = require('../controllers/researchController');
router.get('/', researchController.home);

module.exports = router;

