const apiKey = "f9ba6f38b629685e851f20d1dcb0019f";
const lat = "13.48";
const lon = "-88.18";
const units = "imperial";
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date().getDay();
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
async function fetchCurrentWeather() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      console.error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}
function displayCurrentWeather(data) {
  const cityNameEl = document.getElementById("city-name");
  const currentTempEl = document.getElementById("current-temp");
  const weatherDescEl = document.getElementById("weather-description");
  const weatherIconEl = document.getElementById("weather-icon");
  const weatherFigcaptionEl = document.getElementById("weather-figcaption");
  if (data && data.main && data.weather) {
    cityNameEl.textContent = data.name;
    currentTempEl.textContent = `${Math.round(data.main.temp)}°F`;
    weatherDescEl.textContent = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIconEl.src = iconSrc;
    weatherIconEl.alt = data.weather[0].description;
    weatherFigcaptionEl.textContent = data.weather[0].description;
  }
}
async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const forecastData = await response.json();
      displayForecast(forecastData);
    } else {
      console.error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}
function displayForecast(forecastData) {
  const forecastList = document.getElementById("forecast-list");
  forecastList.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    const index = i * 8;
    if (!forecastData.list[index]) continue;
    const dailyData = forecastData.list[index];
    const forecastDayName = weekdays[(currentDay + i) % 7];
    const temp = Math.round(dailyData.main.temp);
    const description = dailyData.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`;
    const li = document.createElement("li");
    li.innerHTML = `<h4>${forecastDayName}</h4><img src="${iconSrc}" alt="${description}"><p>${temp}°F - ${description}</p>`;
    forecastList.appendChild(li);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  fetchCurrentWeather();
  fetchForecast();
});
