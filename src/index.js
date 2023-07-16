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

// getCurrentTemp('london').catch(function (err) {
//   console.log(err);
// });

// getCurrentCondition('london');
// getCurrentTime('london');
// getCurrentWind('london');
// getFeelsLike('london');
// getHumidity('london');
// getMoonPhase('london');

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
    localStorage.setItem('city', searchedValue);
    populateCurrent(searchedValue);

    sliderPresent.classList.add('selected');
    sliderFuture.classList.remove('selected');
    sliderPast.classList.remove('selected');

    setBackgroundPhoto();
  };
};

// populateCurrent('london');
// populateCurrent('tbilisi');
if (!localStorage.getItem('city')) {
  populateCurrent('london');
} else {
  populateCurrent(localStorage.getItem('city'));
}

const sliderPast = document.getElementById('past');
const sliderPresent = document.getElementById('present');
const sliderFuture = document.getElementById('future');

sliderPast.addEventListener('click', () => {
  sliderPresent.classList.remove('selected');
  sliderFuture.classList.remove('selected');
  sliderPast.classList.add('selected');

  populatePast(localStorage.getItem('city'));
});

sliderPresent.addEventListener('click', () => {
  sliderPresent.classList.add('selected');
  sliderFuture.classList.remove('selected');
  sliderPast.classList.remove('selected');

  populateCurrent(localStorage.getItem('city'));
});

sliderFuture.addEventListener('click', () => {
  sliderPresent.classList.remove('selected');
  sliderFuture.classList.add('selected');
  sliderPast.classList.remove('selected');

  populateFuture(localStorage.getItem('city'));
});

// const client = createClient(
//   'wD8qsuf1WHFi4fT9RDQspOOpXHcRliLiLiQrv5Y6MyqkIPYhmIbvZOVX'
// );
// const query = `${localStorage.getItem('city')}`;
// client.photos.search({ query, per_page: 1, mode: 'cors' }).then((photos) => {
//   const bg = document.getElementById('content');
//   const iconUrl = `url('${photos.photos[0].src.landscape}')`;
//   bg.style.backgroundImage = iconUrl
//   // console.log(photos.photos[0].src.landscape);
// });
setBackgroundPhoto();
