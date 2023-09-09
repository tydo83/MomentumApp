const clock = document.querySelector("#clock")

function  getClock() {
    const date = new Date
    const Hour = date.getHours().toString().padStart(2, "0");
    const Minute = date.getMinutes().toString().padStart(2, "0")
    const Seconds = date.getSeconds().toString().padStart(2, "0")

    const hours = `${Hour}:${Minute}:${Seconds}`
    clock.innerHTML = hours
}

getClock();
setInterval(getClock, 1000);

