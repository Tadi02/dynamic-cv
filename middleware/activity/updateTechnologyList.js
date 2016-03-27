module.exports = function () {

    //Updates technology list if a new list is present in request
    return function (req, res, next) {
      console.log("UpdateTechnologies");
      return next();
    };

};
