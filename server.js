// require express:
var express = require('express');
// require path:
var path = require('path');
// make app using express:
var app = express();
// require body-parser:
var bodyParser = require('body-parser');
// give express app a bodyParser which works with urlencoded forms
app.use(bodyParser.urlencoded({extended: true}));
// give express app a bodyParser which works with json
app.use(bodyParser.json());
// set static directories:
app.use(express.static(path.join(__dirname, 'client')));
// run mongoose.js which connects to mongodb
require('./server/config/mongoose.js');
// require a function which accepts express app as an argument to set routes:
var routes_setter = require('./server/config/routes.js');
// invoke the function with app as an argument:
routes_setter(app);
// check for environment variable process.env.PORT and store it, or default 8000:
var port = process.env.PORT || 8000;
// start listening for connections at port, then invoke given callback:
app.listen(8000,function(){console.log(`listening on port ${port}`);});
