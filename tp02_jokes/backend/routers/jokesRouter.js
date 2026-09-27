const express = require('express');
const router = express.Router();

const jokesController = require('../controllers/jokesController');

router.use(express.json());
router.use(express.urlencoded({extended: false}));


router.get('/list',jokesController.logFile);
router.get('/joke/:id', jokesController.getJokeById);
router.get('/random',jokesController.logFilerandom);



module.exports =router;

