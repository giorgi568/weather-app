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

getCurrentTemp('london').catch(function (err) {
  console.log(err);
});

getCurrentCondition('london');
getCurrentTime('london');
getCurrentWind('london');
getFeelsLike('london');
getHumidity('london');
getMoonPhase('london')
