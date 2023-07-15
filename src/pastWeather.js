async function getPastWeather(city) {
  const apiKey = 'fc78ef90a1c34ac1b67144641231107';
  const tag = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=2023-07-13`;

  const response = await fetch(tag, { mode: 'cors' });
  const historyWeather = await response.json();
  console.log(historyWeather);
}
export {getPastWeather}