import colors from './src/utils/colors.js'
import AddCss from './src/utils/addCss.js'

AddCss('style.css')

const dvs = document.querySelectorAll('div')

dvs.forEach((item, index) => {
  item.style.backgroundColor = Object.values(colors)[index]
})


const olaDiv = document.getElementById('ola')
const olaHeader = document.createElement('h1')
olaHeader.textContent = 'Olá'
olaDiv.appendChild(olaHeader)


const teste = () =>{
  alert('sodanodnasdn')
}