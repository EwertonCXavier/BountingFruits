const API_KEY = "790eab9638f4a34c04f99e4674d51bca";
const API_KEY_2 = "384251159eb0b77104981dcc6b7cb0d5";
// Carlsbad coordinates
const LATITUDE = 33.158092;
const LONGITUDE = -117.3506;
const COUNTER = 3; // Number of forecast days

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;

const THREE_DAYS_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;


(async () => {
  // current weather api call
  const response = await fetch(WEATHER_API_URL);
  const data = await response.json();


  // forecast weather api call

  const forecastResponse = await fetch(THREE_DAYS_FORECAST_URL);
  const forecastData = await forecastResponse.json();


  console.log('HERE IS THE API DATA: ', data, forecastData);
  let currentConditions = {};
  // if (data) {
  //   currentConditions = {
  //     temperature: data.main.temp,
  //     conditionDescription: data.weather.description,
  //     humidity: data.main.humidity,

  //   }
  // }
})();