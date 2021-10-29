const CalendarScreen = () =>{
  const mainContainer = document.querySelector('.main-container')
  const h1 = document.createElement('h1')
  h1.innerText = "Calendar Screen"

  mainContainer.appendChild(h1)
}

export const CalendarScreenDestroy = () => {
  const mainContainer = document.querySelector('.main-container')
  mainContainer.querySelector('h1').remove()
}

export default CalendarScreen