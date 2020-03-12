const URL = {
  CURRENT_WEATHER: "https://api.openweathermap.org/data/2.5/weather",
  FORECAST_WEATHER: "https://api.openweathermap.org/data/2.5/forecast",

  WEATHER_ICON (icon) {
    return `https://openweathermap.org/img/w/${icon}.png`;
  }
}

const API = {
  AAPID: "da8a900a121c85c777ee940859e8e3c2",
  UNITS: "metric"
}

export { URL, API };
