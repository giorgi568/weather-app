function makeWeatherBlock(dataArr) {
  const pastWeather = document.getElementById('main_content');

  const day = document.createElement('div');
  day.classList.add('day-one', 'past-block');
  pastWeather.appendChild(day);

  const dateInfo = document.createElement('div');
  dateInfo.textContent = dataArr.date;
  day.appendChild(dateInfo);

  const icon = document.createElement('div');
  const iconUrl = `url('${dataArr.icon}')`;
  icon.style.backgroundImage = iconUrl;
  icon.classList.add('weather-icon-small');
  day.appendChild(icon);

  const temp = document.createElement('div');
  temp.textContent = dataArr.temp + '°C';
  day.appendChild(temp);

  const wind = document.createElement('div');
  wind.textContent = `Wind(max): ${dataArr.wind}km/h`;
  day.appendChild(wind);

  const condition = document.createElement('div');
  condition.textContent = dataArr.condition;
  day.appendChild(condition);
}

export {makeWeatherBlock}