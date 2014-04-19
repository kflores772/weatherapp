var CityData,
    server = require("../server");

CityData = Backbone.Model.extend({
    getCityObj: function (callback) {
        var model = this;

        callback(model.set("cityList", server.getCityObj()));
    }, 
    addCity: function (callback) {
        var model = this;
        
        /*
            cityList = {
                Toronto: {
                    name: "Toronto",

                },
                Vancouver: {
                    ...
                }
            }

        */
        
        server.setCityObj(model.get("newCity"), model.get("cityList"), callback);
    }
});

module.exports = CityData;
