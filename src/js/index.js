import '../css/app.scss';
import DataApi from './dataApi';
import DaySelector from './daySelector';

class App
{
  constructor()
  {
    this.initApp();
  }

  initApp()
  {
    new DataApi();
    new DaySelector();
  }
}

new App();
