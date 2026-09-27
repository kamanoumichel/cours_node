const express = require('express');
const router = express.Router();

const AppController = require('../controllers/appController');

router.get('/user/:id',AppController.home)

module.exports = router;