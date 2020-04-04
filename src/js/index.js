import '../css/app.scss';
import DataApi from './dataApi';

class App
{
  constructor()
  {
    this.initApp();
  }

  initApp()
  {
    new DataApi();
  }
}

new App();
