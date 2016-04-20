var db = require('../config/db');

var Technology = db.model('Technology', {
    name: String
});

module.exports = Technology;
