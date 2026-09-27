const express = require('express');
const router = express.Router();

//Puisque researchRouter est lié au chemin '/research' dans app.js,
// le chemin '/' ci-dessous correspond en faite à '/research'+'/',
// soit '/research/' !

router.get('/', (req, res) => {
  res.render('pages/about');
});

module.exports = router;

