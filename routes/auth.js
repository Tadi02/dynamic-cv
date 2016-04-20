var preventReLogin = require("../middleware/auth/preventReLogin");
var authenticateUser = require("../middleware/auth/authenticateUser");
var renderTemplate = require("../middleware/generic/renderTemplate");
var registerUser = require("../middleware/auth/registerUser");
var logoutUser = require("../middleware/auth/logout");
var bodyParser = require('body-parser');

module.exports = function (app) {
    
    //Login page
    app.use('/login',
      bodyParser.urlencoded({ extended: true }),
      preventReLogin(),
      authenticateUser(),
      renderTemplate("login")
    );
    
    //Registration page
    app.use('/register',
        bodyParser.urlencoded({ extended: true }),
        preventReLogin(),
        registerUser(),
        renderTemplate("register")
    );

    //Logout
    app.use('/logout',
        logoutUser()
    );
    
    
};