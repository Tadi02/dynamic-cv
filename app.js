var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

require('./routes/auth')(app);
require('./routes/profile')(app);
require('./routes/tech')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

