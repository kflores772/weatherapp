var CityListView,
    cityListTemplate,
    WeatherDetailsView = require("./weatherDetails");

function renderSubviews(model) {
    window.views.weatherDetails.setElement($("#weather-details"));
    window.views.weatherDetails.display(model);
}

CityListView = Backbone.View.extend({
    initialize: function () {
        $.get("templates/cityList.html", function (data) {
            cityListTemplate = data;
        });

        window.views.weatherDetails = new WeatherDetailsView();
    },
    render: function () {
        var view = this,
            template,
            cityList;

        this.model.getCityObj(function (response) {
            cityList = Object.keys(response);

            template = _.template(cityListTemplate, {
                cityList: cityList
            });

            view.$el.html(template);
            renderSubviews(view.model);
        });
    },
    display: function (model) {
        this.model = model;
        this.render();
    },
    events: {
        "click #add-city-button" : "addCity",
    },
    validate: function () {
        var validator = $("#city-input").parsley();
        return validator.validate();
    },
    addCity: function (event) {
        var view = this,
            cityName = $("#city-input-field").val(),
            city = {
                name: cityName
            },
            cityList = this.model.get("cityList") || {};
        
        if(!this.validate()) {
            return false;
        }
        
        this.model.set("newCity", city);
        this.model.set("cityList", cityList);

        this.model.addCity(function (response) {
            if (response === "success") {
                view.render();
            } else {
                alert(response);
            }
        });
        
    }
});

module.exports = CityListView;
