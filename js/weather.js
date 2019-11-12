const COORDS = 'coords';

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
}

function getError() {
    console.log('현재 위치를 불러오지 못했습니다');
}

function askGeo() {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
}

function loadGeolocation() {
    const loadedGeolocation = localStorage.getItem(COORDS);
    if (loadedGeolocation === null) {
        askGeo();
    } else {
        const pos = JSON.parse(loadedGeo);
        console.log(pos);
    }
}

function init() {
    loadGeolocation();
}

init();