import $ from 'jquery';

export default class DataApi
{
  constructor()
  {
    this.initEls();
    this.initEvents();
  }

  initEls()
  {
    this.$els =
    {
      nameCity: $('js-infoCity-city'),
      date: $('js-infoCity-date')
    }

    this.url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=chambery&key=aa3ea3391ed14b86928dcc8411a98361';
  }

  initEvents()
  {

  }
}
