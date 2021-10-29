const PaintScreen = () =>{
  const mainContainer = document.querySelector('.main-container')
  const h1 = document.createElement('h1')
  h1.innerText = "Paint Screen"

  mainContainer.appendChild(h1)
}

export const PaintScreenDestroy = () => {
  const mainContainer = document.querySelector('.main-container')
  mainContainer.querySelector('h1').remove()
}

export default PaintScreen