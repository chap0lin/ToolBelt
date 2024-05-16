import AddCss from "../../utils/addCss.js"
const w = 977
const h = 540

var canvas, ctx
var mouseStatus = 'up'
var previousPosition = {x:0, y:0}
var imageData = []

const undoFunction = (e) => {
  if(e.ctrlKey && e.key == 'z' && imageData.length > 0){
    ctx.putImageData(imageData.pop(), 0,0)
  }
}

const CreateListeners = () => {
  canvas.addEventListener('mousemove', (e) => {
    if(mouseStatus == 'down'){
      ctx.beginPath()
      ctx.moveTo(previousPosition.x, previousPosition.y)
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()
      ctx.closePath()
      previousPosition = {x: e.offsetX, y: e.offsetY}
    }
  })

  canvas.addEventListener('mousedown', (e) => {
    imageData.push(ctx.getImageData(0,0,w,h))
    previousPosition = {x: e.offsetX, y: e.offsetY}
    mouseStatus = 'down'
  })
  canvas.addEventListener('mouseup', () => {
    mouseStatus = 'up'
  })
  document.addEventListener('keydown', undoFunction)
}

const PaintScreen = () =>{
  AddCss('./src/components/PaintScreen/PaintScreen.css')
  const mainContainer = document.querySelector('.main-container')

  const PaintScreenContainer = document.createElement('div')
  PaintScreenContainer.classList.add('paint-screen-container')

  canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  ctx = canvas.getContext('2d')
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, w, h)
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 1

  CreateListeners()

  const ButtonsContainer = document.createElement('div')
  ButtonsContainer.classList.add('paint-buttons-container')

  const undoButton = document.createElement('input')
  undoButton.type = 'button'
  undoButton.value = 'UNDO'
  undoButton.addEventListener('click', () => {
    if(imageData.length > 0)
      ctx.putImageData(imageData.pop(), 0, 0)
  })

  const colorButton = document.createElement('input')
  colorButton.type = 'color'
  colorButton.addEventListener('change', () => {
    ctx.strokeStyle = colorButton.value
  })
  
  const sizeButton = document.createElement('input')
  sizeButton.type = 'button'
  sizeButton.value = `SIZE: ${ctx.lineWidth}`
  sizeButton.addEventListener('click', () => {
    ctx.lineWidth = ctx.lineWidth==4?1:ctx.lineWidth+1
    sizeButton.value = `SIZE: ${ctx.lineWidth}`
  })

  const clearButton = document.createElement('input')
  clearButton.type = 'button'
  clearButton.value = 'CLEAR'
  clearButton.addEventListener('click', () => {
    ctx.fillRect(0,0,w,h)
  })

  ButtonsContainer.appendChild(undoButton)
  ButtonsContainer.appendChild(colorButton)
  ButtonsContainer.appendChild(sizeButton)
  ButtonsContainer.appendChild(clearButton)

  PaintScreenContainer.appendChild(canvas)
  PaintScreenContainer.appendChild(ButtonsContainer)

  mainContainer.appendChild(PaintScreenContainer)
}

export const PaintScreenDestroy = () => {
  document.removeEventListener('keydown', undoFunction)
  const mainContainer = document.querySelector('.main-container')
  mainContainer.querySelector('.paint-screen-container').remove()
}

export default PaintScreen