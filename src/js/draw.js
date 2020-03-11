import { getDateInfo } from './util/util'

const draw = {
  currentWeatherContent(res) {
    const { main: { temp, feels_like, temp_min, temp_max },
      weather, sys, name, dt } = res.data;
    const currentWeather = document.querySelector('#currentWeather');

    const currentTime = document.createElement('p');

    // XXX: 날짜 관련 Moment 사용하여 처리(외국 시간이 맞지 않음)
    const date = new Date(dt * 1000);
    const { dayOfWeek, year, month, day, hour } = getDateInfo(date);
    currentTime.textContent = `(${dayOfWeek}요일) ${hour}:00, ${year}년 ${month}월 ${day}일`

    const headerText = document.createElement('h2');
    headerText.textContent = `Current Weather in ${name}, ${sys.country}`;

    const img = document.createElement('img');
    const icon = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
    img.setAttribute('src', icon);

    const infoWeather = document.createElement('div');
    infoWeather.id = 'currentWeatherInfo';

    const tempWrap = document.createElement('p');
    tempWrap.innerHTML = `${Math.floor(temp)}°C`;

    const tempMinWrap = document.createElement('span');
    tempMinWrap.innerHTML = `${Math.floor(temp_min)}°C`;

    const tempMaxWrap = document.createElement('span');
    tempMaxWrap.innerHTML = `${Math.floor(temp_max)}°C`;
    
    const feelsLikeWrap = document.createElement('span');
    feelsLikeWrap.innerHTML = `체감온도: ${Math.floor(feels_like)}°C`;

    infoWeather.appendChild(tempWrap);
    infoWeather.appendChild(tempMinWrap);
    infoWeather.appendChild(tempMaxWrap);
    infoWeather.appendChild(feelsLikeWrap);

    if(currentWeather.children.length !== 0) {
      while (currentWeather.firstChild) {
        currentWeather.removeChild(currentWeather.firstChild);
      }
    }

    currentWeather.appendChild(currentTime);
    currentWeather.appendChild(headerText);
    currentWeather.appendChild(img);
    currentWeather.appendChild(infoWeather);
  },

  forecastWeatherContent(res) {
    const forecastWeatherWrap = document.querySelector('#forecastWeatherWrap');

    if (forecastWeatherWrap.children.length !== 0) {
      while (forecastWeatherWrap.firstChild) {
        forecastWeatherWrap.removeChild(forecastWeatherWrap.firstChild);
      }
    }

    const headerText = document.createElement('h2');
    headerText.textContent = `Weekly Weather`;

    const forecastWeatherList = document.createElement('ul');
    forecastWeatherList.id = 'forecastWeatherList';

    res.data.list.forEach(item => {
      const { main: { temp_min, temp_max }, dt, weather } = item;
      const forecastWeatherInfo = document.createElement('li');
      forecastWeatherInfo.classList.add('forecastWeatherInfo');

      const date = new Date(dt * 1000);
      const { dayOfWeek, hour } = getDateInfo(date);
      
      const dateInfo = document.createElement('p');
      dateInfo.textContent = `(${dayOfWeek}) ${hour}:00`;

      const img = document.createElement('img');
      const icon = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
      img.setAttribute('src', icon);

      const tempMinWrap = document.createElement('span');
      tempMinWrap.classList.add('tempMin');
      tempMinWrap.innerHTML = `${Math.floor(temp_min)}°C`;

      const tempMaxWrap = document.createElement('span');
      tempMaxWrap.classList.add('tempMax');
      tempMaxWrap.innerHTML = `${Math.floor(temp_max)}°C`;

      forecastWeatherInfo.appendChild(dateInfo);
      forecastWeatherInfo.appendChild(img);
      forecastWeatherInfo.appendChild(tempMinWrap);
      forecastWeatherInfo.appendChild(tempMaxWrap);

      forecastWeatherList.appendChild(forecastWeatherInfo);

    });

    forecastWeatherWrap.appendChild(headerText);
    forecastWeatherWrap.appendChild(forecastWeatherList);
    
  }
}

export default draw;