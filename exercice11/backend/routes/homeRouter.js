var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeControllers');

router.get('/',homeController.home);
router.get('/movies',homeController.list);

module.exports = router;