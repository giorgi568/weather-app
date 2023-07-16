import {
  getCurrentTemp,
  getCurrentCondition,
  getCurrentTime,
  getCurrentWind,
  getFeelsLike,
  getHumidity,
  getMoonPhase,
  getIcon,
} from './getCityWeather';
import { getMoonPhaseIcon } from './getMoonPhaseIcon';

async function populateCurrent(city) {
  const mainContent = document.getElementById('main_content');
  mainContent.textContent = '';
  mainContent.innerHTML = '';
  mainContent.classList.add('main_content');
  // mainContent.classList.add('transitioned');

  const simpleHeader = document.createElement('div');
  simpleHeader.classList.add('simple-header');
  const currentTemp = await getCurrentTemp(city);
  simpleHeader.textContent = `${city.toUpperCase()} ${currentTemp}°C`;
  mainContent.appendChild(simpleHeader);

  const iconMain = document.createElement('div');
  iconMain.classList.add('icon-main');
  const icon = await getIcon(city);
  const iconUrl = `url('${icon}')`;
  // console.log(iconUrl);
  iconMain.style.backgroundImage = iconUrl;
  mainContent.appendChild(iconMain);

  const statsMain = document.createElement('div');
  statsMain.classList.add('stats-main', 'cell');
  mainContent.appendChild(statsMain);

  const conditionMain = document.createElement('p');
  const feelsLikeMain = document.createElement('p');
  const timeMain = document.createElement('p');
  const humidityMain = document.createElement('p');
  const windMain = document.createElement('p');
  const moonPhaseMain = document.createElement('p');

  conditionMain.classList.add('condition-main', 'cell');
  feelsLikeMain.classList.add('feelsLike-main', 'cell');
  timeMain.classList.add('time-main', 'cell');
  humidityMain.classList.add('humidity-main', 'cell');
  windMain.classList.add('wind-main', 'cell');
  moonPhaseMain.classList.add('moonPhase-main', 'cell');

  const condition = await getCurrentCondition(city);
  conditionMain.textContent = condition;

  const feelslike_c = await getFeelsLike(city);
  feelsLikeMain.textContent = `feels like ${feelslike_c}°C`;

  const time = await getCurrentTime(city);
  timeMain.textContent = `${time}`;

  const humidity = await getHumidity(city);
  humidityMain.textContent = `humidity: ${humidity}%`;

  const wind = await getCurrentWind(city);
  windMain.textContent = `wind: ${wind}km/h`;

  const moonPhase = await getMoonPhase(city);
  const moonSvg = getMoonPhaseIcon(moonPhase);
  moonPhaseMain.appendChild(moonSvg);

  statsMain.append(
    conditionMain,
    feelsLikeMain,
    timeMain,
    humidityMain,
    windMain,
    moonPhaseMain
  );
}

export { populateCurrent };
