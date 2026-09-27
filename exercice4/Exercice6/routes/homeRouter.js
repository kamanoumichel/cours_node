const express = require('express');
const router = express.Router();
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

router.get('/', (req, res) => {
  res.render('pages/home');
});

module.exports = router;
