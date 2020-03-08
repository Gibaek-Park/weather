import { URL, API } from '../../config';
import axios from 'axios';
import draw from './draw';

export default class WeatherData {
  constructor(city) {
    this.city = city;
  }

  getCurrentWeather() {
    axios.get(URL.CURRENT_WEATHER, {
      params: {
        q: this.city,
        appid: API.AAPID,
        units: API.UNITS
      }
    })
      .then(res => {
        draw.currentWeatherContent(res);
      })
      .catch(error => console.log(error));
  }

  getForecastWeather() {
    axios.get(URL.FORECAST_WEATHER, {
      params: {
        q: this.city,
        appid: API.AAPID,
        units: API.UNITS
      }
    })
      .then(res => {
        draw.forecastWeatherContent(res);
      })
      .catch(error => console.log(error));
  }
}