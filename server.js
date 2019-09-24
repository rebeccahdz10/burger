var express = require("express");

var app = express();

var PORT = process.env.PORT || 8060;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET HANDLEBARS
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');

app.use(routes);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
