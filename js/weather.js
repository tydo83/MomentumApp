// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");



navigator.geolocation.getCurrentPosition(geoSuccess, geoErr) 
function geoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

}

function geoErr() { 
    alert("Can't locate you. No weather for you")

}