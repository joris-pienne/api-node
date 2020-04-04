import $ from 'jquery';
import InfoCityTemplate from '../template/infoCity.hbs';
import Greeting from './greeting';
import WeatherPicture from './weatherPicture';
import ConverterDegree from './converterDegree';

export default class DataApi
{
  constructor() {
    this.initEls();
    this.initEvents();
  }

  initEls() {

  }

  initEvents() {
    $('#submit').click(this.getDataForm);
    new Greeting();
  }

  getDataForm(e) {
    e.preventDefault();
    var city = document.getElementById('inputs__city').value;
    var country = document.getElementById('inputs__country').value;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${country}&key=aa3ea3391ed14b86928dcc8411a98361`,
      "method": "GET"
    }

     $.ajax(settings).done(function (response) {

       var city_data = {
         //RAJOUTER LE LIEN POUR l'IMAGE : If de description et suivant le texte afficher une image
         "city":city,
         "country":country,
         "date":response.data[0].valid_date,
         "weather":response.data[0].weather.description,
         "temp":response.data[0].temp,
         "tempMax":response.data[0].max_temp,
         "tempMin":response.data[0].min_temp,
         "rain":response.data[0].precip,
         "snow":response.data[0].snow,
         "wind":response.data[0].wind_spd
       }
       console.log(city_data);

       var rendered = InfoCityTemplate(city_data)
       $('div.infoCity').html(rendered);

       new WeatherPicture();
       new ConverterDegree();
      });
   }
}
