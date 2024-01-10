

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:<span class="${seconds % 2 === 0 ? 'green' : 'red'}">${padZero(seconds)}</span>`;
    document.getElementById('clock').innerHTML = formattedTime;
}

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}

setInterval(updateClock, 1000);
updateClock(); 