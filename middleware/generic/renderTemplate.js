module.exports = function (templateToRender) {

    //Render template in parameter
    return function (req, res) {
        console.log("Render " + templateToRender);
        res.send();
    }
    
};
