var WeatherDetailsView,
    weatherDetailsTemplate;

WeatherDetailsView = Backbone.View.extend({
    initialize: function () {
        $.get("templates/weatherDetails.html", function (data) {
            weatherDetailsTemplate = data;
        });
    },
    render: function () {
        var view = this,
            template,
            newCity = this.model.get("newCity");
        
        this.model.getCityObj(function (response) {
            template = _.template(weatherDetailsTemplate, {
                newCity: response[newCity.name] 
            });

            view.$el.html(template);
        });
    },
    display: function (model) {
        this.model = model;
        this.render();
    },
    events: {
        "click #add-city-button" : "getCityDetails",
    },
    getCityDetails: function (event) {
        var view = this,
            cityName = $("#city-input-field").val(),
            city = {
                name: cityName
            },
            cityList = this.model.get("cityList") || {};
        
        cityList[cityName] = city;
        this.model.set("cityList", cityList);

        this.model.setCityOb(function () {
            view.render();
        });
        
    }
});

module.exports = WeatherDetailsView;
