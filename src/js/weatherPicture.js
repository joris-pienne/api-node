import $ from 'jquery';
export default class WeatherPicture {

  constructor()
  {
    this.initEls();
    this.initEvents();
  }

  initEls()
  {

  }

  initEvents()
  {
    this.getPicture();
  }

  getPicture()
  {
    console.log("test out");
    var p = $.trim($('#js-weatherDescri').text());
    if (p == "Thunderstorm with light rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Thunderstorm with rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Thunderstorm with heavy rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Thunderstorm with light drizzle") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Thunderstorm with drizzle") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Thunderstorm with heavy drizzle") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Thunderstorm with Hail") {
      $("#js-picWeather").attr('src','src/pictures/weather/thunderShowers.svg');

    }

    else if (p == "Light Drizzle") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Drizzle") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Heavy Drizzle") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Light Rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Moderate Rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Heavy Rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Freezing rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Light shower rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Shower rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Heavy shower rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/rain.svg');

    }

    else if (p == "Light snow") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Snow") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Heavy snow") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Mix snow/rain") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Sleet") {
      $("#js-picWeather").attr('src','src/pictures/weather/windy.svg');

    }

    else if (p == "Heavy sleet") {
      $("#js-picWeather").attr('src','src/pictures/weather/windy.svg');

    }

    else if (p == "Snow shower") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Heavy snow shower") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Flurries") {
      $("#js-picWeather").attr('src','src/pictures/weather/snow.svg');

    }

    else if (p == "Mist") {
      $("#js-picWeather").attr('src','src/pictures/weather/foggy.svg');

    }

    else if (p == "Smoke") {
      $("#js-picWeather").attr('src','src/pictures/weather/foggy.svg');

    }

    else if (p == "Haze") {
      $("#js-picWeather").attr('src','src/pictures/weather/foggy.svg');

    }

    else if (p == "Sand/dust") {
      $("#js-picWeather").attr('src','src/pictures/weather/foggy.svg');

    }

    else if (p == "Fog") {
      $("#js-picWeather").attr('src','src/pictures/weather/foggy.svg');

    }

    else if (p == "Freezing Fog") {
      $("#js-picWeather").attr('src','src/pictures/weather/foggy.svg');

    }

    else if (p == "Clear Sky") {
      $("#js-picWeather").attr('src','src/pictures/weather/sunny.svg');

    }

    else if (p == "Sunny") {
      $("#js-picWeather").attr('src','src/pictures/weather/sunny.svg');

    }

    else if (p == "Few clouds") {
      $("#js-picWeather").attr('src','src/pictures/weather/cloudy.svg');
      console.log("test in");
    }

    else if (p == "Scattered clouds") {
      $("#js-picWeather").attr('src','src/pictures/weather/cloudy.svg');

    }

    else if (p == "Broken clouds") {
      $("#js-picWeather").attr('src','src/pictures/weather/cloudy.svg');

    }

    else if (p == "Overcast Clouds") {
      $("#js-picWeather").attr('src','src/pictures/weather/cloudy.svg');

    }

    else if (p == "Unknown Precipitation") {
      $("#js-picWeather").attr('src','psrc/ictures/weather/rain.svg');

    }
  }
}
