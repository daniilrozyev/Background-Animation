let clockElement = document.querySelector("#clock");

function htmlCssJsClock() {
  let time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const clock = `${hours}:${minutes}:${seconds}`;

  clockElement.innerHTML = clock;
}

htmlCssJsClock();
setInterval(htmlCssJsClock, 1000);
