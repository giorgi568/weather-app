import { getCurrentTime } from './getCityWeather';
import { decrementDays, getFormattedDate,  } from './dateFunctions';

async function getPastWeather(city, num) {
  // num is how many days back weather you want
  const dayArr = {
    date: false,
    wind: false,
    condition: false,
    temp: false,
    icon: false,
  };
  const currentTime = await getCurrentTime(city);
  const day = getFormattedDate(decrementDays(currentTime, num));
  // const day1Past = decrementDays(currentTime, 3);
  dayArr.date = day;

  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${day}`;

  const response = await fetch(tag, { mode: 'cors' });
  const historyWeather = await response.json();
  // console.log(historyWeather);

  const wind = historyWeather.forecast.forecastday[0].day.maxwind_kph;
  dayArr.wind = wind;

  const condition = historyWeather.forecast.forecastday[0].day.condition.text;
  dayArr.condition = condition;

  const temp = historyWeather.forecast.forecastday[0].day.avgtemp_c;
  dayArr.temp = temp;

  const icon = historyWeather.forecast.forecastday[0].day.condition.icon
  dayArr.icon = icon

  // console.log(dayArr);
  return dayArr;
}

export { getPastWeather };
