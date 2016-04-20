var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var renderTemplate = require("../middleware/generic/renderTemplate");
var fetchActivities = require("../middleware/activity/fetchActivities");
var addActivity = require("../middleware/activity/addActivity");
var updateActivity = require("../middleware/activity/updateActivity");
var removeActivity = require("../middleware/activity/removeActivity");
var returnJsonResponse = require("../middleware/generic/returnJsonResponse");
var addTechnologyToActivity = require("../middleware/activity/addTechnologyToActivity");
var removeTechnologyFromActivity = require("../middleware/activity/removeTechnologyFromActivity");
var fetchTechnologiesForActivity = require("../middleware/tech/fetchTechnologiesForActivity");
var bodyParser = require('body-parser');

module.exports = function (app) {

    //Activities routes only available to authenticated users
    app.use('/activities',
        ensureUserIsLoggedIn()
    );

    //Renders view (data rendered with client side ejs)
    app.use('/activities/view',
        renderTemplate("activities")
    );

    //REST CRUD endpoints
    app.get('/activities/list',
        fetchActivities(),
        renderTemplate("activityTable")
    );

    app.post('/activities/add',
        bodyParser.json(),
        addActivity(),
        returnJsonResponse()
    );

    app.post('/activities/:id',
        bodyParser.json(),
        updateActivity(),
        returnJsonResponse()
    );

    app.delete('/activities/:id',
        removeActivity(),
        returnJsonResponse()
    );

    app.get('/activities/tech/:id',
        fetchTechnologiesForActivity(),
        renderTemplate("activityTechTable")
    );

    app.post('/activities/tech/:id/:techId',
        addTechnologyToActivity(),
        returnJsonResponse()
    );

    app.delete('/activities/tech/:id/:techId',
        removeTechnologyFromActivity(),
        returnJsonResponse()
    );
    
};
