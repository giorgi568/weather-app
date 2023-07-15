async function getCurrentTemp(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const temp = currentWeather.current.temp_c;

  console.log(currentWeather);
  return temp;
}

async function getCurrentCondition(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const condition = currentWeather.current.condition.text;

  console.log(condition);
  return condition;
}

async function getCurrentTime(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const time = currentWeather.location.localtime;

  console.log(time);
  return time;
}

async function getCurrentWind(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const wind = currentWeather.current.wind_kph;

  console.log(wind);
  return wind;
}

async function getFeelsLike(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const fellsLike = currentWeather.current.feelslike_c;

  console.log(fellsLike);
  return fellsLike;
}

async function getHumidity(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const humidity = currentWeather.current.humidity;

  console.log(humidity);
  return humidity;
}

async function getMoonPhase(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const moonPhase = currentWeather.astronomy.astro.moon_phase;

  console.log(currentWeather);
  return moonPhase;
}

async function getIcon(city){
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const response = await fetch(tag, { mode: 'cors' });
  const currentWeather = await response.json();
  const icon = currentWeather.current.condition.icon;

  return icon;
}
export {
  getCurrentTemp,
  getCurrentCondition,
  getCurrentTime,
  getCurrentWind,
  getFeelsLike,
  getHumidity,
  getMoonPhase,
  getIcon
};
