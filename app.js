var express = require('express');
var session = require('express-session');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/ejs'));

app.use(session({
    secret: 'dynamic-cv',
    cookie: {
        maxAge: 3600000
    },
    resave: true,
    saveUninitialized: false
}));

app.use('/', function (req, res, next) {
    res.tpl = {};
    res.tpl.error = "";
    return next();
});

app.get('/', function (req, res) {
    res.redirect('/login');
});

require('./routes/auth')(app);
require('./routes/profile')(app);
require('./routes/tech')(app);
require('./routes/activity')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

