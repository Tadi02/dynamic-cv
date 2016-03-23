var checkIfUserIsLoggedInMW = require("../middleware/auth/checkIfUserIsLoggedIn");
var authenticateUser = require("../middleware/auth/authenticateUser");
var renderTemplate = require("../middleware/generic/renderTemplate");
var registerUser = require("../middleware/auth/registerUser");

module.exports = function (app) {
    
    //Login page
    app.use('/login',
      checkIfUserIsLoggedInMW(),
      authenticateUser(),
      renderTemplate("login")
    );
    
    //Registration page
    app.use('/register',
        checkIfUserIsLoggedInMW(),
        registerUser(),
        renderTemplate("registration")
    );
    
    
};