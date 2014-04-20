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
    }
});

module.exports = WeatherDetailsView;
