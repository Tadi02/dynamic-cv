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

    app.use('/technologies/list',
        fetchTechnologies(),
        renderTemplate("technologies")
    );

    app.use('/technologies/add',
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
