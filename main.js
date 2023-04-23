//UPDATE TIME
const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;


function updateTime() {
  const date = new Date();

  const hours = formatTime(date.getDay());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  display.innerText = `${hours} : ${minutes} : ${seconds}`

}

//Adding 0 to date if the 'time' is low than 10

function formatTime(time){
  if (time < 10){
    return '0' + time;
  }
  return time
}

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm(){
  if(alarmTime){
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current){
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert('Alarm set');
    }

  }
}


setInterval(updateTime, 1000);