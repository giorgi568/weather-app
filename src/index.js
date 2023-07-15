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
import { getPastWeather } from './PastWeather';

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
getPastWeather('london').catch((err)=> {
  console.log(err)
})