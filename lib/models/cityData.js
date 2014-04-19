var CityData,
    server = require("../server");

CityData = Backbone.Model.extend({
    getCityObj: function (callback) {
        var model = this;
    
        server.getCityObj(callback);
    }, 
    addCity: function (callback) {
        var model = this,
            newCity = model.get("newCity"),
            cityList = model.get("cityList");
        
        // check if the city was previously entered
        if (cityList.hasOwnProperty(newCity.name)) {
            callback("City already exists");    
        } else {
            cityList[newCity.name] = newCity;
            server.setCityObj(newCity, cityList, function (result) {
                if (result === "success") {
                    model.set("cityList", cityList);
                }
                
                callback(result); 
            });
        }
    }
});

module.exports = CityData;
