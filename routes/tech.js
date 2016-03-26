var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var fetchTechnologies = require("../middleware/tech/fetchTechnologies");
var renderTemplate = require("../middleware/generic/renderTemplate");
var addTechnology = require("../middleware/tech/addTechnology");
var removeTechnology = require("../middleware/tech/removeTechnology");
var updateTechnology = require("../middleware/tech/updateTechnology");


module.exports = function (app) {

    //Tech routes only available to authenticated users
    app.use('/tech',
        ensureUserIsLoggedIn()
    );

    app.use('/tech/list',
        fetchTechnologies(),
        renderTemplate("technologies")
    );

    app.use('/tech/:id',
        updateTechnology()
    );

    app.use('/tech/add',
        addTechnology()
    );


    app.use('/tech/remove',
        removeTechnology()
    );

};
