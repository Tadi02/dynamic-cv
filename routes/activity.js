var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var renderTemplate = require("../middleware/generic/renderTemplate");
var fetchActivities = require("../middleware/activity/fetchActivities");
var addActivity = require("../middleware/activity/addActivity");
var updateActivity = require("../middleware/activity/updateActivity");
var removeActivity = require("../middleware/activity/removeActivity");
var returnJsonResponse = require("../middleware/generic/returnJsonResponse");
var updateTechnologyList = require("../middleware/activity/updateTechnologyList");

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
        returnJsonResponse()
    );

    app.post('/activities/add',
        addActivity(),
        returnJsonResponse()
    );

    app.post('/activities/:id',
        updateActivity(),
        updateTechnologyList(),
        returnJsonResponse()
    );

    app.delete('/activities/:id',
        removeActivity(),
        returnJsonResponse()
    );
    
    
};
