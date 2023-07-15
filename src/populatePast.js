import { getPastWeather } from './pastWeather';

async function populatePast(city) {
  const pastWeather = document.getElementById('main_content');
  pastWeather.textContent = '';
  pastWeather.innerHTML = '';
  pastWeather.classList.add('past-weather');

  //making report for 3rd days in past
  const day1 = document.createElement('div');
  day1.classList.add('day-one', 'past-block');
  pastWeather.appendChild(day1);

  //data for 3rd day in past
  const day1Data = await getPastWeather(city, 3);

  const dateInfo = document.createElement('div');
  dateInfo.textContent = day1Data.date;
  day1.appendChild(dateInfo);

  const icon = document.createElement('div');
  const iconUrl = `url('${day1Data.icon}')`;
  icon.style.backgroundImage = iconUrl;
  icon.classList.add('past-icon');
  day1.appendChild(icon);

  const temp = document.createElement('div');
  temp.textContent = day1Data.temp + '°C';
  day1.appendChild(temp);

  const wind = document.createElement('div');
  wind.textContent = `Wind(max): ${day1Data.wind}km/h`;
  day1.appendChild(wind);

  const condition = document.createElement('div');
  condition.textContent = day1Data.condition;
  day1.appendChild(condition);
}

export { populatePast };
