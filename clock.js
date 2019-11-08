const clock = document.querySelector(".js-clock");

function getTime(){
    const currentTime = new Date;
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    clock.innerHTML = `${(currentHour < 10) ? `0${currentHour}` : currentHour }:${
        (currentMinutes < 10) ? `0${currentMinutes}` : currentMinutes }:${
        (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds}`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();