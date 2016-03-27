var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var fetchTechnologies = require("../middleware/tech/fetchTechnologies");
var renderTemplate = require("../middleware/generic/renderTemplate");
var addTechnology = require("../middleware/tech/addTechnology");
var removeTechnology = require("../middleware/tech/removeTechnology");
var updateTechnology = require("../middleware/tech/updateTechnology");
var returnJsonResponse = require("../middleware/generic/returnJsonResponse");


module.exports = function (app) {

    //Tech routes only available to authenticated users
    app.use('/technologies',
        ensureUserIsLoggedIn()
    );

    //Renders view (data rendered with client side ejs)
    app.use('/technologies/view',
        renderTemplate("technologies")
    );

    app.get('/technologies/list',
        fetchTechnologies(),
        returnJsonResponse()
    );

    app.post('/technologies/add',
        addTechnology(),
        returnJsonResponse()
    );

    app.post('/technologies/:id',
        updateTechnology(),
        returnJsonResponse()
    );

    app.delete('/technologies/:id',
        removeTechnology(),
        returnJsonResponse()
    );

};
