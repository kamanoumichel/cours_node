const express = require('express');
const router = express.Router();

//Router pour tous les chemins sous /teaching (voir app.js)

router.get('/', (req, res) => {
  res.render('pages/teaching');
});

router.get('/javascript', (req, res) => {
  res.render('pages/js');
});

router.get('/php', (req, res) => {
  res.render('pages/php');
});

router.get('/node', (req, res) => {
  res.render('pages/node');
});

router.get('/node/express', (req, res) => {
  res.render('pages/express');
});

module.exports = router;

