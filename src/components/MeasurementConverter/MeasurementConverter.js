import AddCss from '../../utils/addCss.js'

const weightIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="weight-hanging" class="svg-inline--fa fa-weight-hanging fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32 0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14zM256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"></path></svg>`
const lengthIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ruler-horizontal" class="svg-inline--fa fa-ruler-horizontal fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M544 128h-48v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8H88c-4.42 0-8-3.58-8-8v-88H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32z"></path></svg>`
const temperatureIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thermometer-three-quarters" class="svg-inline--fa fa-thermometer-three-quarters fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M192 384c0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64 0-23.685 12.876-44.349 32-55.417V160c0-17.673 14.327-32 32-32s32 14.327 32 32v168.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path></svg>`
const swapIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Swap Horizontal</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"/></svg>`

var options1 = ["lb", "mi", "in", "F"]
var options2 = ["kg", "m", "cm", "C"]

const firstFieldConversion = (index, value) => {
  const secondField = document.getElementById('secondField')
  switch(index){
    case 0:
      secondField.value = (value*0.453592).toFixed(2)
      break
    case 1:
      secondField.value = (value*1609.34).toFixed(2)
      break
    case 2:
      secondField.value = (value*2.54).toFixed(2)
      break
    case 3:
      secondField.value = ((value-32)/1.8).toFixed(2)
  }
}
const secondFieldConversion = (index, value) => {
  const firstField = document.getElementById('firstField')
  switch(index){
    case 0:
      firstField.value = (value/0.453592).toFixed(2)
      break
    case 1:
      firstField.value = (value/1609.34).toFixed(2)
      break
    case 2:
      firstField.value = (value/2.54).toFixed(2)
      break
    case 3:
      firstField.value = (value*1.8+32).toFixed(2)
  }
}

const MeasurementConverter = () => {
  AddCss('./src/components/MeasurementConverter/MeasurementConverter.css')
  const container = document.getElementById('measurement')

  const measurementIcons = document.createElement('div')
  measurementIcons.classList.add('toolbelt-converter-icons-container')

  const firstIcon = document.createElement('div')
  firstIcon.innerHTML = weightIcon
  const secondIcon = document.createElement('div')
  secondIcon.innerHTML = lengthIcon
  const thirdIcon = document.createElement('div')
  thirdIcon.innerHTML = temperatureIcon

  measurementIcons.appendChild(firstIcon)
  measurementIcons.appendChild(secondIcon)
  measurementIcons.appendChild(thirdIcon)


  const containerBoxes = document.createElement('div')
  containerBoxes.classList.add('toolbelt-converter-boxes-container')

  const box1 = document.createElement('div')
  box1.classList.add('one-box')
  const input1 = document.createElement('input')
  input1.classList.add('inputNumber')
  input1.id = 'firstField'

  const select1 = document.createElement('select')
  select1.classList.add('unitSelector')
  options1.forEach((option)=>{
    let op = document.createElement('option')
    op.value = option
    op.innerText = option
    select1.appendChild(op)
  })

  box1.appendChild(input1)
  box1.appendChild(select1)


  const middleIcon = document.createElement('div')
  middleIcon.classList.add('toolbelt-converter-swap-icon')
  middleIcon.innerHTML = swapIcon

  const box2 = document.createElement('div')
  box2.classList.add('one-box')
  const input2 = document.createElement('input')
  input2.classList.add('inputNumber')
  input2.id = 'secondField'

  const select2 = document.createElement('select')
  select2.classList.add('unitSelector')
  options2.forEach((option)=>{
    let op = document.createElement('option')
    op.value = option
    op.innerText = option
    select2.appendChild(op)
  })

  select1.addEventListener("change", ()=>{
    select2.selectedIndex=select1.selectedIndex;
    input1.value = 0
    input2.value = 0
  })
  select2.addEventListener("change", ()=>{
    select1.selectedIndex=select2.selectedIndex;
    input1.value = 0
    input2.value = 0
  })

  box2.appendChild(input2)
  box2.appendChild(select2)

  input1.addEventListener('keypress', (evt) => {
    if(evt.key == 'Enter'){
      firstFieldConversion(select1.selectedIndex, input1.value)
    }
  })
  input1.addEventListener('blur',()=>{
    firstFieldConversion(select1.selectedIndex, input1.value)
  })

  input2.addEventListener('keypress', (evt) => {
    if(evt.key == 'Enter'){
      secondFieldConversion(select1.selectedIndex, input2.value)
    }
  })
  input2.addEventListener('blur',()=>{
    secondFieldConversion(select1.selectedIndex, input2.value)
  })

  containerBoxes.appendChild(box1)
  containerBoxes.appendChild(middleIcon)
  containerBoxes.appendChild(box2)

  container.appendChild(measurementIcons)
  container.appendChild(containerBoxes)
}

export default MeasurementConverter