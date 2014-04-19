var server,
    requestURL,
    cityObj = {};

server = {
    getCityObj: function () {
        return cityObj;
 
    }, 
    setCityObj: function (newCity, cityList, callback) {
        requestURL = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.bylocation%20WHERE%20location%3D%22" + newCity.name + "%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
        
        $.ajax({
            url: requestURL,
            success: function (result) {
                var info = result.query.results.weather.rss.channel;

                newCity.location = info.location;
                newCity.currentTemp = Math.round((parseInt(info.item.condition.temp)-32)*(5/9));
                newCity.forecast = info.item.forecast;
            
                cityObj[newCity.name] = newCity;

                console.log(cityObj);
                callback();
            }
        });

    }
}

module.exports = server;
