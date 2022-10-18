const express = require('express');
const exphbs = require('express-handlebars');
//bodyParser for parsing middleware
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

//initialize express
const app = express();

//set up a port
const port = process.env.PORT || 5000;

//parsing middleware

//bodyParser.urlencoded returns middleware that only parses urlencoded bodies - it only looks at requests where 'Content-Type' header matches the type option.
//the new body object will contain key-value pairs where the value can be a string or array (when extended is false), or any type(when extended is true)

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//templating engine - syntax for exphbs changed to reflect update(.create method)
const handlebars = exphbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//router
app.get('', (req, res) => {
  res.render('home');
});

//listen to the port
app.listen(port, () => console.log(`Listening on port ${port}`));
