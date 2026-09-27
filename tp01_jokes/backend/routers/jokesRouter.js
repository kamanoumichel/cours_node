const express = require('express');
const router = express.Router();

const jokesController = require('../controllers/jokesController');

router.get('/jokes/list',jokesController.logFile);

router.get('/jokes/random',jokesController.logFilerandom);



module.exports =router;

