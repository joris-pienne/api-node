import $ from 'jquery';
export default class ConverterDegree {

  constructor()
  {
    this.initEls();
    this.initEvents();
  }

  initEls()
  {
    this.$els =
    {
      degree: $('.js-degree'),
      degreeMin: $('.js-degree-min'),
      degreeMax: $('.js-degree-max')
    };
  }

  initEvents()
  {
    this.getDegree();
  }

  getDegree()
  {
    let deg = this.$els.degree.text();
    let degMin = this.$els.degreeMin.text();
    let degMax = this.$els.degreeMax.text();

    deg = Math.floor(deg * 9 / 5 +32);
    degMin = Math.floor(degMin * 9 / 5 +32);
    degMax = Math.floor(degMax * 9 / 5 +32);

    //console.log(deg);
    //console.log(degMin);
    //console.log(degMax);

    this.$els.degree.html(deg);
    this.$els.degreeMin.html(degMin);
    this.$els.degreeMax.html(degMax);
  }
}
