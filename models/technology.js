var db = require('../config/db');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

var Technology = db.model('Technology', {
    name: String,
    user: ObjectId
});

module.exports = Technology;
