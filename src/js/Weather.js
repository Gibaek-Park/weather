import WeatherData from './WeatherData.js'

export default class Weather {
  constructor() {
   
  }
  
  run() {
    const searchField = document.querySelector('#search');

    searchField.addEventListener('keyup', e => this.onSearch(e));
  }

  onSearch(e) {
    if(e.keyCode === 13) {
      const weatherData = new WeatherData(e.target.value);
      weatherData.getCurrentWeather();
      weatherData.getForecastWeather();
    }
  }

}