import AddCss from "../../utils/addCss.js";

var numberOfDices = 2
var running

const createDices = () => {
  const diceContainer = document.createElement('div')
  let divDice, olDieList, liDieItem,  spanDot
  for(let i=0; i<numberOfDices; i++){
    divDice = document.createElement('div')
    divDice.classList.add('dice')
    olDieList = document.createElement('ol')
    olDieList.classList.add('die-list')
    olDieList.classList.add('even-roll')
    // olDieList.classList.add('rolling-dice')
    for(let j=0; j<6; j++){
      liDieItem = document.createElement('li')
      liDieItem.dataset.side = `${j+1}`
      liDieItem.classList.add('die-item')
      for(let k=0; k<j+1; k++){
        spanDot = document.createElement('span')
        spanDot.classList.add('dot')
        liDieItem.appendChild(spanDot)
      }
      olDieList.appendChild(liDieItem)
    }
    
    divDice.appendChild(olDieList)
    diceContainer.appendChild(divDice)
  }
  return diceContainer
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(value = null) {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    die.dataset.roll = getRandomNumber(1, 6);
    die.classList.remove('rolling-dice')
  });
}

const LuckScreen = () =>{
  AddCss('./src/components/LuckScreen/LuckScreen.css')
  const mainContainer = document.querySelector('.main-container')

  const LuckScreenContainer = document.createElement('div')
  LuckScreenContainer.classList.add('luck-screen-container')

  const diceTitle = document.createElement('h1')
  diceTitle.innerText = 'Dices'

  const diceContainer = document.createElement('div')
  diceContainer.classList.add('dice-container')
  diceContainer.innerHTML = createDices().innerHTML

  const diceInputContainer = document.createElement('div')
  diceInputContainer.classList.add('dice-input-container')
  const diceInputLabel = document.createElement('label')
  diceInputLabel.innerText = 'Number of dices:'
  const diceInput = document.createElement('input')
  diceInput.type = 'number'
  diceInput.value = 2
  diceInput.min = 1
  diceInput.max = 6

  diceInput.addEventListener('change', () => {
    numberOfDices = diceInput.value
    console.log('change value')
    diceContainer.innerHTML = createDices().innerHTML
  })

  diceInputContainer.appendChild(diceInputLabel)
  diceInputContainer.appendChild(diceInput)

  const diceButton = document.createElement('button')
  diceButton.classList.add('dice-roll-button')
  diceButton.innerText = 'ROLL'
  diceButton.addEventListener('click', () => {
    if(!running){
      running = true
      const dice = [...document.querySelectorAll(".die-list")];
      dice.forEach(die => {
        die.classList.add('rolling-dice')
        die.dataset.roll = null
      });
      setTimeout(()=>{
        rollDice()
        running = false
      },2000)
    }
  })

  LuckScreenContainer.appendChild(diceTitle)
  LuckScreenContainer.appendChild(diceContainer)
  LuckScreenContainer.appendChild(diceInputContainer)
  LuckScreenContainer.appendChild(diceButton)

  mainContainer.appendChild(LuckScreenContainer)
}

export const LuckScreenDestroy = () => {
  const mainContainer = document.querySelector('.main-container')
  mainContainer.querySelector('.luck-screen-container').remove()
}

export default LuckScreen