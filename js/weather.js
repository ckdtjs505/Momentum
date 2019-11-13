const weather = document.querySelector("#js-weather");
const API_KEY = "1223fc278a86f6dc1166701059d6b418";
const COORDS = "coords";

/* 
    2019.11.12
    개발내용
    1) 현재위치 가져오기 
     - Web API : navigator
    2) 현재위치를 지역이름, 실시간 현위치온도 가져오기
     - fetch 비동기 호출 
    3) 현재온도 켈빈 섭씨로 변환
     - 간단한 css 구현
    
     2019.11.13
     개발내용
     1) WEATER값이 나오지 않는 오류
      - api요청을 http -> https로 변경
*/
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getSuccess(postion) {
  const latitude = postion.coords.latitude;
  const longitude = postion.coords.longitude;
  const coordsObjs = {
    latitude,
    longitude
  };
  saveCoords(coordsObjs);
  getWeather(latitude, longitude);
}

function getError() {
  console.log("현재 위치를 불러오지 못했습니다");
}

function askGeo() {
  navigator.geolocation.getCurrentPosition(getSuccess, getError);
}

function paintWeather(name, temp) {
  weather.innerHTML = ` ${Math.ceil(temp - 273.15)}°C ${name},`;
  weather.className = "weather";
}

function getWeather(lat, lon) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(URL)
    .then(res => res.json())
    .then(data => paintWeather(data.name, data.main.temp));
}

function loadGeolocation() {
  const loadedGeolocation = localStorage.getItem(COORDS);
  if (loadedGeolocation === null) {
    askGeo();
  } else {
    const pos = JSON.parse(loadedGeolocation);
    getWeather(pos.latitude, pos.longitude);
  }
}

function init() {
  loadGeolocation();
}

init();
