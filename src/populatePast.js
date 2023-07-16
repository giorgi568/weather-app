import { getPastWeather } from './pastWeather';
import { makeWeatherBlock } from './makeWeatherBlock';

async function populatePast(city) {
  const pastWeather = document.getElementById('main_content');
  pastWeather.textContent = '';
  pastWeather.innerHTML = '';
  pastWeather.classList.add('block-weather');
  pastWeather.classList.remove('err');
  pastWeather.classList.add('main_content');
  // pastWeather.classList.add('transitioned');

  const day1Data = await getPastWeather(city, 3);
  const day2Data = await getPastWeather(city, 2);
  const day3Data = await getPastWeather(city, 1);

  makeWeatherBlock(day3Data);
  makeWeatherBlock(day2Data);
  makeWeatherBlock(day1Data);
}

export { populatePast };
