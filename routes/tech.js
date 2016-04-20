var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var fetchTechnologies = require("../middleware/tech/fetchTechnologies");
var renderTemplate = require("../middleware/generic/renderTemplate");
var addTechnology = require("../middleware/tech/addTechnology");
var removeTechnology = require("../middleware/tech/removeTechnology");
var updateTechnology = require("../middleware/tech/updateTechnology");
var returnJsonResponse = require("../middleware/generic/returnJsonResponse");
var bodyParser = require('body-parser');


module.exports = function (app) {

    //Tech routes only available to authenticated users
    app.use('/technologies',
        ensureUserIsLoggedIn()
    );

    //Renders view (data rendered with client side ejs)
    app.use('/technologies/view',
        renderTemplate("technologies")
    );

    //REST CRUD endpoints
    app.get('/technologies/list',
        fetchTechnologies(),
        renderTemplate("techTable")
    );

    app.get('/technologies/options',
        fetchTechnologies(),
        renderTemplate("techOptions")
    );

    app.post('/technologies/add',
        bodyParser.json(),
        addTechnology(),
        returnJsonResponse()
    );

    app.post('/technologies/:id',
        bodyParser.json(),
        updateTechnology(),
        returnJsonResponse()
    );

    app.delete('/technologies/:id',
        removeTechnology(),
        returnJsonResponse()
    );

};
