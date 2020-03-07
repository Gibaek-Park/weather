import { getDateInfo } from './util/util'

const draw = {
  currentWeatherContent(res) {
    const { main: { temp, feels_like, temp_min, temp_max },
      weather, wind, sys, name, cloudes, dt } = res.data;
    const currentWeather = document.querySelector('#currentWeather');

    const currentTime = document.createElement('p');
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
    // todo: res.data.list 복수의 값으로 뿌려주기. 5일치
  }
}

export default draw;