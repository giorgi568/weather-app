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

// getCurrentTemp('london').catch(function (err) {
//   console.log(err);
// });

// getCurrentCondition('london');
// getCurrentTime('london');
// getCurrentWind('london');
// getFeelsLike('london');
// getHumidity('london');
// getMoonPhase('london');

const sliderPast = document.getElementById('past');
const sliderPresent = document.getElementById('present');
const sliderFuture = document.getElementById('future');

sliderPast.addEventListener('click', () => {
  sliderPresent.classList.remove('selected');
  sliderFuture.classList.remove('selected');
  sliderPast.classList.add('selected');
});

sliderPresent.addEventListener('click', () => {
  sliderPresent.classList.add('selected');
  sliderFuture.classList.remove('selected');
  sliderPast.classList.remove('selected');
});

sliderFuture.addEventListener('click', () => {
  sliderPresent.classList.remove('selected');
  sliderFuture.classList.add('selected');
  sliderPast.classList.remove('selected');
});

// populateCurrent('tbilisi');

// getPastWeather('london', 3).catch((err)=> {
//   console.log(err)
// });

// getFutureWeather('london', 3).catch((err) => {
//   console.log(err);
// });

// populatePast('london').catch((err) => {
//   console.log(err);
// });

// populateFuture('london').catch((err) => {
//   console.log(err);
// });

const searchForm = document.getElementById('form');
const searchBtn = document.getElementById('btn');
// searchBtn.addEventListener('click',)

window.onload = () => {
  searchBtn.onclick = (e) => {
    e.preventDefault();
    const searchedValue = document.getElementById('search_box').value;

    // const mainContent = document.getElementById('main_content');
    // mainContent.classList.remove('main_content');

    populateCurrent(searchedValue);
  };
};

// populateCurrent('london');
// populateCurrent('tbilisi');
