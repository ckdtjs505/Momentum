const clock = document.querySelector(".js-clock");

function getTime() {
    const currentTime = new Date;
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    clock.innerHTML = `${(currentHour < 10) ? `0${currentHour}` : currentHour }:${
        (currentMinutes < 10) ? `0${currentMinutes}` : currentMinutes }`
}

function init() {
    getTime();
    setInterval(getTime, 60000);
}
init();