app.controller('WeatherController', function(WeatherService) {
    var wc = this;
    WeatherService.getWeather().then(function(weather) {
        wc.weather = weather;
        wc.weather.dt = Date.now();
        wc.toCel();
        wc.toFahr();
    })
    // DO NOT EDIT ABOVE

    wc.toCel = function() {
        var x = wc.weather.main.temp;
        var celsius = x - 273.15;
        wc.temp = Math.round(celsius);
    }
    wc.toFahr = function() {
        var x = wc.weather.main.temp;
        var fahrenheit = 1.8 * (x - 273) + 32
        wc.ftemp = Math.round(fahrenheit);
    }


    // function toTitleCase(str) {
    // var str = wc.weather.weather[0].description;
    //     return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    // }

})