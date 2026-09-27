const express = require('express');
const router = express.Router();
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

const homeController = require('../controllers/homeController')
router.get('/', (homeController.home));

module.exports = router;
