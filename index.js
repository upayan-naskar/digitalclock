setInterval(showTime, 1000);
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    var currentTime = `${hour}:${min}:${sec}`;
    document.getElementById('container').innerHTML = currentTime
}

showTime();