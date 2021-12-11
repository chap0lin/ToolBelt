import AddCss from '../../utils/addCss.js'

const moneyIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Usd</title><path fill="currentColor" d="M240 480v-36.42C160.53 439 112.25 398.06 112 336h72c1.77 26.34 23.86 46.45 56 50v-98l-26.77-7c-61-14.18-93.64-49.39-93.64-102.08C119.59 116.81 164.08 76.08 240 70V32h32v38c77.39 6.3 119 47.74 120 106h-72c-.76-24.06-15.83-43.39-48-46v92l30.82 7.28C367.61 243.46 400 277 400 332c0 64.34-43.74 105.88-128 111.32V480zm0-264v-86c-27.59 1.52-47.27 18.47-47.27 42.53 0 22.3 16.39 36.88 47.27 43.47zm32 78v92c38.15-1.54 56.38-18.92 56.38-45.77 0-24.58-18.23-41.13-56.38-46.23z"/></svg>`
const swapIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Swap Horizontal</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"/></svg>`

var options1 = ["BRL", "USD", "EUR", "BTC", "ETH"]
var options2 = ["BRL", "USD", "EUR", "BTC", "ETH"]
const link = "https://coinyep.com/api/v1/?from="

var dollar, euro, eth, btc;
var anyExchangeRate;

function getExchangeRate(from,to){
    const request = new XMLHttpRequest()
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`${link}${from}&to=${to}&lang=pt&format=json`)}`
    request.open("GET", url)
    request.send()

    request.onload = (e) => {
        if(request.responseText){
            var obj = JSON.parse(request.responseText)
            anyExchangeRate = parseFloat(obj.price);

            if(from == 'USD' && to == 'BRL'){
                dollar.innerText = `USD: ${anyExchangeRate.toFixed(2)}`
            }
            if(from == 'EUR' && to == 'BRL'){
                euro.innerText = `EUR: ${anyExchangeRate.toFixed(2)}`
            }
            if(from == 'BTC' && to == 'BRL'){
                btc.innerText = `BTC: ${anyExchangeRate.toFixed(2)}`
            }
            if(from == 'ETH' && to == 'BRL'){
                eth.innerText = `ETH: ${anyExchangeRate.toFixed(2)}`
            } 
        }

    }
}

const CurrencyConverter = () => {
    AddCss('./src/components/CurrencyConverter/CurrencyConverter.css')
    const container = document.getElementById('currency')

    //--------------------------- DIV 1 ------------------------------//

    const currencyInfos = document.createElement('div')
    currencyInfos.classList.add('container-infos')

    const exchangeRate = document.createElement('div')
    exchangeRate.classList.add('exchange-rate')

    const columnInfos1 = document.createElement('div')
    columnInfos1.classList.add('column-infos1')
    dollar = document.createElement('h3')
    euro = document.createElement('h3')
    columnInfos1.appendChild(dollar)
    columnInfos1.appendChild(euro)
    getExchangeRate('USD','BRL');
    getExchangeRate('EUR','BRL');

    const columnInfos2 = document.createElement('div')
    columnInfos2.classList.add('column-infos2')
    btc = document.createElement('h3')
    eth = document.createElement('h3')
    columnInfos2.appendChild(btc)
    columnInfos2.appendChild(eth)
    getExchangeRate('BTC','BRL');
    getExchangeRate('ETH','BRL');
  
    const currencyIcon = document.createElement('div')
    currencyIcon.classList.add('toolbelt-currency-converter-icon')
    currencyIcon.innerHTML = moneyIcon
  
    exchangeRate.appendChild(columnInfos1)
    exchangeRate.appendChild(columnInfos2)
    currencyInfos.appendChild(exchangeRate)
    currencyInfos.appendChild(currencyIcon)

    //----------------------------- DIV 2 ------------------------------------//

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
    box2.appendChild(input2)
    box2.appendChild(select2)
    
    //----------------------------------------------------------------//
    // CONVERSAO DIRETA
    input1.addEventListener('keypress', (evt) => {
        getExchangeRate(`${select1.value}`, `${select2.value}`)
        if(evt.key == 'Enter'){
            const secondField = document.getElementById('secondField')
            secondField.value = (input1.value*anyExchangeRate).toFixed(2)
        }
    })
    input1.addEventListener('blur',()=>{
        getExchangeRate(`${select1.value}`, `${select2.value}`)
        const secondField = document.getElementById('secondField')
        secondField.value = (input1.value*anyExchangeRate).toFixed(2)
    })

    //----------------------------------------------------------------//
    // CONVERSAO INVERSA 
    input2.addEventListener('keypress', (evt) => {
        getExchangeRate(`${select2.value}`, `${select1.value}`)
        if(evt.key == 'Enter'){
            const firstField = document.getElementById('firstField')
            firstField.value = (input2.value*anyExchangeRate).toFixed(2)
        }
    })
    input2.addEventListener('blur',()=>{
        getExchangeRate(`${select2.value}`, `${select1.value}`)
        const firstField = document.getElementById('firstField')
        firstField.value = (input2.value*anyExchangeRate).toFixed(2)
    })

    containerBoxes.appendChild(box1)
    containerBoxes.appendChild(middleIcon)
    containerBoxes.appendChild(box2)
    container.appendChild(currencyInfos)
    container.appendChild(containerBoxes)

}

export default CurrencyConverter