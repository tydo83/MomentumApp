import { API_KEY } from "../config.js";

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoErr() {
  alert("Can't locate you. Please, allow the location tracking");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoErr);
