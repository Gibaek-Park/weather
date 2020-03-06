const wrap = document.querySelector('#wrap');

const draw = {
  currentWeatherContent(res) {
    const el = document.createElement('img');
    const icon = "http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png";
    el.setAttribute('src', icon)
    wrap.appendChild(el);
  },

  forecastWeatherContent(res) {
    // todo: res.data.list 복수의 값으로 뿌려주기. 5일치
  }
}

export default draw;