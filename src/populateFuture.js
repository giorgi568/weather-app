import { getFutureWeather } from "./futureWeather";
import { makeWeatherBlock } from "./makeWeatherBlock";

async function populateFuture(city) {
  const futureWeather = document.getElementById('main_content');
  futureWeather.textContent = '';
  futureWeather.innerHTML = '';
  futureWeather.classList.add('block-weather');

  const day1Data = await getFutureWeather(city, 3);
  const day2Data = await getFutureWeather(city, 2);
  const day3Data = await getFutureWeather(city, 1);

  makeWeatherBlock(day3Data);
  makeWeatherBlock(day2Data);
  makeWeatherBlock(day1Data);
}
export {populateFuture}