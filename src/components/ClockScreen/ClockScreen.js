import AddCss from "../../utils/addCss.js";

let timerHours, timerMinutes, timerSeconds
let buttonStart, buttonPause, buttonReset

let tempo = 0, interval;

function showTime() {
  tempo += 1;
  const {hours, minutes, seconds} = toStandardTime(tempo);
  timerHours.innerText = hours;
  timerMinutes.innerText = minutes;
  timerSeconds.innerText = seconds;
}

function start() {
  interval = setInterval(showTime, 1000);
  hideButton([buttonStart]);
  showButton([buttonPause, buttonReset]);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = 0;
    buttonPause.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    buttonPause.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  interval = 0;
  buttonPause.innerHTML = 'PAUSE';
  tempo = -1;
  showTime()
  hideButton([buttonPause, buttonReset]);
  showButton([buttonStart]);
}

function toStandardTime(tempo) {
  let horas = Math.floor(tempo / 3600);
  let minutos = Math.floor((tempo - horas * 3600) / 60);
  let segundos = tempo - horas * 3600 - minutos * 60;

  horas = `${horas}`.padStart(2, '0');
  minutos = `${minutos}`.padStart(2, '0');
  segundos = `${segundos}`.padStart(2, '0');

  return {
    hours: horas,
    minutes: minutos,
    seconds: segundos
  }
}

function showButton(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideButton(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}

const ClockScreen = () => {
    AddCss('./src/components/ClockScreen/ClockScreen.css')
    const mainContainer = document.querySelector('.main-container')

    const ClockScreenContainer = document.createElement('div')
    ClockScreenContainer.classList.add('clock-screen-container')

    const cronometerTitle = document.createElement('h1')
    cronometerTitle.innerText = 'Cronometer'

    const timeContainer = document.createElement('div')
    timeContainer.classList.add('time')

    timerHours = document.createElement('p')
    timerMinutes = document.createElement('p')
    timerSeconds = document.createElement('p')

    timerHours.innerText = '00'
    timerMinutes.innerText = '00'
    timerSeconds.innerText = '00'

    timeContainer.appendChild(timerHours)
    timeContainer.appendChild(timerMinutes)
    timeContainer.appendChild(timerSeconds)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    buttonStart = document.createElement('button')
    buttonPause = document.createElement('button')
    buttonReset = document.createElement('button')

    buttonStart.innerText = 'START'
    buttonPause.innerText = 'PAUSE'
    buttonReset.innerText = 'RESET'

    buttonStart.addEventListener('click', () => {
        start()
    })
    buttonPause.addEventListener('click', () => {
        pause()
    })
    buttonReset.addEventListener('click', () => {
        reset()
    })

    buttonContainer.appendChild(buttonStart)
    buttonContainer.appendChild(buttonPause)
    buttonContainer.appendChild(buttonReset)

    ClockScreenContainer.appendChild(cronometerTitle)
    ClockScreenContainer.appendChild(timeContainer)
    ClockScreenContainer.appendChild(buttonContainer)


    mainContainer.appendChild(ClockScreenContainer)
}

export default ClockScreen

export const ClockScreenDestroy = () => {
    const mainContainer = document.querySelector('.main-container')
    mainContainer.querySelector('.clock-screen-container').remove()
  }


