var CityListView = require("./views/cityList"),
    WeatherDetailsView = require("./views/weatherDetails"),
    CityData = require("./models/cityData"),
    validators = require("./validators");

function onDocumentReady() {

    validators.register();
    window.views = {};

    window.views.cityList = new CityListView({
        el: $("#city-input"),
        model: new CityData()
    });

    window.views.weatherDetails = new WeatherDetailsView({
        el: $("#weather-details"),
        model: new CityData()
    });
}

$(document).ready(onDocumentReady);
