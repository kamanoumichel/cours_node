const express = require('express');
const router = express.Router();

const AppController = require('../controllers/appController');
//Pour le décodage des requêtes POST/PUT

router.get('/user/:id',AppController.home)
router.get('/',AppController.show_get_params)
router.get('/form',AppController.formulaire)

module.exports = router;