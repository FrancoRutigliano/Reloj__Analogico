//UPDATE TIME
const display = document.getElementById('clock');

function updateTime() {
  const date = new Date();

  const hours = date.getDay();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  display.innerText = `${hours} : ${minutes} : ${seconds}`

}

setInterval(updateTime, 1000);