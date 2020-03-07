import WeatherData from './WeatherData.js'

export default class Weather {
  constructor() {
    this.searchField = document.querySelector('#search');
  }

  run() {
    this.searchField.addEventListener('keyup', event => this.onSearch(event));
  }

  onSearch(event) {
    if (event.keyCode === 13) {
      const weatherData = new WeatherData(event.target.value);
      weatherData.getCurrentWeather();
      weatherData.getForecastWeather();
      this.searchField.value = "";
    }
  }

}