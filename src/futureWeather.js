import { getCurrentTime } from './getCityWeather';
import { addDays, getFormattedDate,  } from './dateFunctions';

async function getFutureWeather(city, num) {
  // num is how many days back weather you want
  const dayArr = {
    date: false,
    wind: false,
    condition: false,
    temp: false,
  };
  const currentTime = await getCurrentTime(city);
  const day = getFormattedDate(addDays(currentTime, num));
  dayArr.date = day;

  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&dt=${day}`;

  const response = await fetch(tag, { mode: 'cors' });
  const historyWeather = await response.json();
  // console.log(historyWeather);

  const wind = historyWeather.forecast.forecastday[0].day.maxwind_kph;
  dayArr.wind = wind;

  const condition = historyWeather.forecast.forecastday[0].day.condition.text;
  dayArr.condition = condition;

  const temp = historyWeather.forecast.forecastday[0].day.avgtemp_c;
  dayArr.temp = temp;

  console.log(dayArr);
  return dayArr;
}

export { getFutureWeather };