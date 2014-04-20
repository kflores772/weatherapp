var server,
    requestURL,
    requestCity,
    cityObj = {};

function degreesConverter(input) {
    if (typeof input === "object") {
        // convert forecast highs and lows
        input.forEach(function (ele, ind) {
            input[ind].high = Math.round((parseInt(input[ind].high)-32)*(5/9));
            input[ind].low = Math.round((parseInt(input[ind].low)-32)*(5/9));
        });

        return input;
    } else {
        return Math.round((parseInt(input)-32)*(5/9));
    }
}

server = {
    getCityObj: function (callback) {
        callback(cityObj);
    }, 
    setCityObj: function (newCity, callback) {
        requestCity = newCity.name.replace(/\ /g, "%20");
        requestURL = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.bylocation%20WHERE%20location%3D%22" + requestCity + "%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=";
        
        $.ajax({
            url: requestURL,
            success: function (result) {
                var info = result.query.results.weather.rss.channel;

                if (info.description === "Yahoo! Weather Error") {
                    callback(info.item.title);
                } else {
                    newCity.location = info.location;
                    newCity.currentTemp = degreesConverter(info.item.condition.temp);
                    newCity.forecast = degreesConverter(info.item.forecast);
                
                    cityObj[newCity.name] = newCity;
                    console.log(cityObj);
                    callback("success");
                }
            }
        });

    }
}

module.exports = server;
