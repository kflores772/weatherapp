var CityData,
    server = require("../server");

CityData = Backbone.Model.extend({
    getCityObj: function (callback) {
        var model = this;
    
        server.getCityObj(function (cityObj) {
            model.set("cityLst", cityObj);
            callback(cityObj);
        });
    }, 
    addCity: function (callback) {
        var model = this,
            newCity = model.get("newCity");

            server.setCityObj(newCity, function (result) {
                if (result === "success") {
                    //model.set("cityList", cityList);
                }
                
                callback(result); 
            });
    }
});

module.exports = CityData;
