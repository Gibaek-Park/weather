import axios from 'axios';
import draw from './draw';

export default class WeatherData {
  constructor(city) {
    this.city = city;
  }

  getCurrentWeather() {
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: this.city,
        appid: 'da8a900a121c85c777ee940859e8e3c2',
        units: 'metric'
      }
    })
      .then(res => {
        draw.currentWeatherContent(res);
      })
      .catch(error => console.log(error));
  }

  getForecastWeather() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: this.city,
        appid: 'da8a900a121c85c777ee940859e8e3c2',
        units: 'metric'
      }
    })
      .then(res => {
        draw.forecastWeatherContent(res);
      })
      .catch(error => console.log(error));
  }
}