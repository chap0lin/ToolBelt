import AddCss from '../../utils/addCss.js'

const icon_rainy = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Rainy</title><path d="M114.61 162.85A16.07 16.07 0 00128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 384l-32 48M224 384l-64 96M304 384l-32 48M384 384l-64 96"/></svg>'
const icon_humidity = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Water</title><path d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M344 328a72 72 0 01-72 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'

const ChangeClock = (date) =>{
    const hours = document.getElementsByClassName('clock-hours');
    
    if(parseInt(date.getHours()) < 10){
        hours[0].innerText = '0'+date.getHours();
    }else{
        hours[0].innerText = date.getHours();
    }
    
    if(parseInt(date.getMinutes()) < 10){
        hours[0].innerText = hours[0].innerText + ':0'+date.getMinutes();
    }else{
        hours[0].innerText = hours[0].innerText + ':'+date.getMinutes();
    }

}

const GetClock = () => {
    var date = new Date;
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI","SAT"];
    
    ChangeClock(date);

    const day = document.getElementsByClassName('clock-date');
    day[0].innerText = dayNames[date.getDay()]+', '+monthNames[date.getMonth()]+' '+date.getUTCDate();

    var time_seconds = 60000 - 1000*parseInt(date.getSeconds());
    
    setTimeout(function(){ 
        date = new Date;
        setInterval(function(){ 
            date = new Date;
            ChangeClock(date);
        }, 60000);
        ChangeClock(date);
    },time_seconds)
}

const ChangeClimate = (climate_list) =>{
    const climate_max = document.getElementsByClassName('climate-max');
    climate_max[0].innerText = climate_list.max+'°C';

    const climate_min = document.getElementsByClassName('climate-min');
    climate_min[0].innerText = climate_list.min+'°C';

    const climate_current = document.getElementsByClassName('climate-current');
    climate_current[0].innerText = climate_list.current+'°C';

    const climate_rainy = document.getElementById('climate-rainy');
    const climate_rainyBox = document.createElement('p')
    climate_rainyBox.innerText = climate_list.rainy;
    climate_rainy.appendChild(climate_rainyBox)

    const climate_humidity = document.getElementById('climate-humidity');
    const climate_humidityBox = document.createElement('p')
    climate_humidityBox.innerText = climate_list.humidity;
    climate_humidity.appendChild(climate_humidityBox)
}

const GetClimate = () =>{
    var climate_list = {
        min: '',
        max: '',
        current: '',
        humidity: '',
        rainy: ''
    }

    var climate = new XMLHttpRequest();
    const url_climate = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://www.tempo.com/brasilia.htm')}`
    climate.open("GET", url_climate)
    climate.send()
    climate.onload = (e) => {
        if(climate.responseText){
            const response = JSON.stringify(climate.responseText)
            
            var new_current = response
            new_current = new_current.substring(new_current.search('dato-temperatura changeUnit'))
            new_current = new_current.substr(0,new_current.search('&deg;</span'))
            new_current = new_current.substr(new_current.length-2) 
            climate_list.current = new_current

            var new_max = response
            new_max = new_max.substring(new_max.search('dia d1 activo'))
            new_max = new_max.substr(0,new_max.search('&deg;</span'))
            new_max = new_max.substr(new_max.length-2) 
            climate_list.max = new_max

            var new_min = response
            new_min = new_min.substring(new_min.search('dia d1 activo'))
            new_min = new_min.substring(new_min.search('minima changeUnitT'))
            new_min = new_min.substr(0,new_min.search('&deg;</span'))
            new_min = new_min.substr(new_min.length-2) 
            climate_list.min = new_min
            
            var new_rainy = response
            new_rainy = new_rainy.substring(new_rainy.search('dia d1 activo'))
            new_rainy = new_rainy.substring(new_rainy.search('probabilidad-lluvia'))
            new_rainy = new_rainy.substr(0,new_rainy.search('<br>'))
            new_rainy = new_rainy.substr(new_rainy.length-3) 
            climate_list.rainy = new_rainy

            var new_humidity = response
            var date = new Date
            new_humidity = new_humidity.substring(new_humidity.search('detalleH dh'+ date.getHours()))
            new_humidity = new_humidity.substring(new_humidity.search('Umidade'))
            new_humidity = new_humidity.substr(0,new_humidity.search('</strong>'))
            new_humidity = new_humidity.substr(new_humidity.length-3) 
            climate_list.humidity = new_humidity

            ChangeClimate(climate_list)
            
        }else{
            console.log("ERRO")
        }
    }
}

const ClockClimate = () => {
    AddCss('./src/components/ClockClimate/clockclimate.css')
    const container = document.getElementById('clockclimate')

    const city = document.createElement('h1')
    city.innerText = 'Brasília, DF'

    const flex_clockclimate = document.createElement('div')
    flex_clockclimate.id = 'flex-container-clock'

    const clock = document.createElement('div')
    clock.className = 'flex-item-clock'

    const clock_hours = document.createElement('div')
    clock_hours.className = 'clock-hours'

    const clock_date = document.createElement('div')
    clock_date.className = 'clock-date'
    
    const climate = document.createElement('div')
    climate.className = 'flex-item-clock'

    const climate_max = document.createElement('div')
    climate_max.className = 'climate-max'
    //climate_max.innerHTML = '32°C'

    const climate_current = document.createElement('div')
    climate_current.className = 'climate-current'
    //climate_current.innerHTML = '23°C'

    const climate_min = document.createElement('div')
    climate_min.className = 'climate-min'
    //climate_min.innerHTML = '19°C'

    const flex_climate = document.createElement('div')
    flex_climate.id = 'flex-container-clock'

    const climate_rainy = document.createElement('div')
    climate_rainy.className = 'flex-item-clock'
    climate_rainy.id = 'climate-rainy'
    climate_rainy.innerHTML = icon_rainy
    
    //const climate_rainy_p = document.createElement('p')
    //climate_rainy_p.innerHTML = '15%'

    const climate_humidity = document.createElement('div')
    climate_humidity.className = 'flex-item-clock'
    climate_humidity.id = 'climate-humidity'
    climate_humidity.innerHTML = icon_humidity

    //const climate_humidity_p = document.createElement('p')
    //climate_humidity_p.innerHTML = '50%'

    clock.appendChild(clock_hours)
    clock.appendChild(clock_date)

    //climate_rainy.appendChild(climate_rainy_p)
    //climate_humidity.appendChild(climate_humidity_p)
    
    flex_climate.appendChild(climate_rainy)
    flex_climate.appendChild(climate_humidity)

    climate.appendChild(climate_max)
    climate.appendChild(climate_current)
    climate.appendChild(climate_min)
    climate.appendChild(flex_climate)

    flex_clockclimate.appendChild(clock)
    flex_clockclimate.appendChild(climate)

    container.appendChild(city)
    container.appendChild(flex_clockclimate)

    GetClock()
    GetClimate()
}
  
export default ClockClimate