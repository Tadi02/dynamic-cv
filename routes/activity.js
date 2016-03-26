var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var renderTemplate = require("../middleware/generic/renderTemplate");
var fetchActivities = require("../middleware/activity/fetchActivities");
var addActivity = require("../middleware/activity/addActivity");
var updateActivity = require("../middleware/activity/updateActivity");
var removeActivity = require("../middleware/activity/removeActivity");
var returnJsonResponse = require("../middleware/generic/returnJsonResponse");

module.exports = function (app) {

    app.use('/activities',
        ensureUserIsLoggedIn()
    );

    app.use('/activities/list',
        fetchActivities(),
        renderTemplate("activities")
    );

    app.use('/activities/add',
        addActivity(),
        returnJsonResponse()
    );

    app.post('/activities/:id',
        updateActivity(),
        returnJsonResponse()
    );

    app.delete('/activities/:id',
        removeActivity(),
        returnJsonResponse()
    );
    
    
};
