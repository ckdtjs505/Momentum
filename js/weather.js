const weather = document.querySelector('#js-weather');
const API_KEY = "1223fc278a86f6dc1166701059d6b418";
const COORDS = "coords";

/* 
    2019.11.12
    개발내용
    1) 현재위치 가져오기 
     - Web API : navigator
    2) 현재위치를 지역이름, 실시간 현위치온도 가져오기
     - fetch 비동기 호출 
    
    다음에 개발해야할 것
     - 디자인 CSS 개발
    
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
    console.log('현재 위치를 불러오지 못했습니다');
}

function askGeo() {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
}

function paintWeather(name, temp) {
    weather.innerHTML = `${name} ${temp}`
}

function getWeather(lat, lon) {
    const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(URL)
        .then(res => res.json())
        .then(data => paintWeather(data.name, data.main.temp))
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