import './style.css';
import {
  getCurrentTemp,
  getCurrentCondition,
  getCurrentTime,
  getCurrentWind,
  getFeelsLike,
  getHumidity,
  getMoonPhase,
} from './getCityWeather';
import { populateCurrent } from './populateCurrent';
import { getPastWeather } from './pastWeather';
import { getFutureWeather } from './futureWeather';
import { populatePast } from './populatePast';
import { populateFuture } from './populateFuture';
import { setBackgroundPhoto } from './setBackgroundPhoto';

const searchForm = document.getElementById('form');
const searchBtn = document.getElementById('btn');

window.onload = () => {
  searchBtn.onclick = (e) => {
    e.preventDefault();
    const searchedValue = document.getElementById('search_box').value;
    localStorage.setItem('city', searchedValue);
    populateCurrent(searchedValue).catch((err) => {
      console.log(err);
      displayError();
    });

    sliderPresent.classList.add('selected');
    sliderFuture.classList.remove('selected');
    sliderPast.classList.remove('selected');

    setBackgroundPhoto();
  };
};

if (!localStorage.getItem('city')) {
  populateCurrent('london').catch((err) => {
    console.log(err);
    displayError();
  });
} else {
  populateCurrent(localStorage.getItem('city')).catch((err) => {
    console.log(err);
    displayError();
  });
}

const sliderPast = document.getElementById('past');
const sliderPresent = document.getElementById('present');
const sliderFuture = document.getElementById('future');

sliderPast.addEventListener('click', () => {
  sliderPresent.classList.remove('selected');
  sliderFuture.classList.remove('selected');
  sliderPast.classList.add('selected');

  populatePast(localStorage.getItem('city')).catch((err) => {
    console.log(err);
    displayError();
  });
});

sliderPresent.addEventListener('click', () => {
  sliderPresent.classList.add('selected');
  sliderFuture.classList.remove('selected');
  sliderPast.classList.remove('selected');

  populateCurrent(localStorage.getItem('city')).catch((err) => {
    console.log(err);
    displayError();
  });
});

sliderFuture.addEventListener('click', () => {
  sliderPresent.classList.remove('selected');
  sliderFuture.classList.add('selected');
  sliderPast.classList.remove('selected');

  populateFuture(localStorage.getItem('city')).catch((err) => {
    console.log(err);
    displayError();
  });
});

setBackgroundPhoto();

function displayError() {
  const mainContent = document.getElementById('main_content');
  mainContent.textContent =
    'Sorry, No Data Found :( (Check If City Name You Entered Is Correct)';
  mainContent.classList.add('err');
}
