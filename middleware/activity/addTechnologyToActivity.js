module.exports = function () {

    //Adds a new technology to an activity
    return function (req, res, next) {
      console.log("AddTechToActivity");
      return next();
    };

};
