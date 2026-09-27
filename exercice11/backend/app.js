const express = require('express');

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.set('layout','layouts/layout');

const homeRouter = require('./routes/homeRouter');
app.use('/12.1_mongoose_ex01',homeRouter)

app.use('/',(req, res)=>{
    res.redirect('/12.1_mongoose_ex01');
});

//const moviesRouter = require('./routes/moviesRouter');
//app

module.exports = app;

