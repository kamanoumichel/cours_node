const express = require('express');
const router = express.Router();

//Router pour tous les chemins sous /teaching (voir app.js)

/*router.get('/', (req, res) => {
  res.send('<h1>Enseignements</h1>');
});

router.get('/javascript', (req, res) => {
  res.send('<h1>Cours de javascript</h1>');
});

router.get('/php', (req, res) => {
  res.send('<h1>Cours de PHP</h1>');
});

router.get('/node', (req, res) => {
  res.send('<h1>Introduction à Node.js</h1>');
});

router.get('/node/express', (req, res) => {
  res.send('<h1>Cours sur le framework Express</h1>');
  });*/


const teachingController = require('../controllers/teachingController');
router.get('/', teachingController.home);
router.get('/javascript', teachingController.javascript);
router.get('/php', teachingController.php);
router.get('/node', teachingController.node);
router.get('/node/express', teachingController.express);

module.exports = router;

