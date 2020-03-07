const wrap = document.querySelector('#wrap');

const draw = {
  currentWeatherContent(res) {
    const { data, sys } = res;
    const imgWrap = document.querySelector('#currentWeatherWrap');

    const currentWeahter = document.createElement('div');
    currentWeahter.classList.add('currentWeather');

    const headerText = document.createElement('h3');
    headerText.textContent = `Current Weather in ${data.name}, ${sys.country}`;

    const img = document.createElement('img');
    const icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    img.setAttribute('src', icon);

    imgWrap.children[0] && imgWrap.removeChild(imgWrap.children[0]);
    currentWeahter.appendChild(headerText);
    currentWeahter.appendChild(img);
    imgWrap.appendChild(currentWeahter);
  },

  forecastWeatherContent(res) {
    // todo: res.data.list 복수의 값으로 뿌려주기. 5일치
  }
}

export default draw;