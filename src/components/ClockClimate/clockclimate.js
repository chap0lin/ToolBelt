import AddCss from '../../utils/addCss.js'

const icon_rainy = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Rainy</title><path d="M114.61 162.85A16.07 16.07 0 00128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 384l-32 48M224 384l-64 96M304 384l-32 48M384 384l-64 96"/></svg>'
const icon_humidity = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Water</title><path d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M344 328a72 72 0 01-72 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'

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
    clock_hours.innerHTML = '13:45'

    const clock_date = document.createElement('div')
    clock_date.className = 'clock-date'
    clock_date.innerHTML = 'WED, OUT 13'
    
    const climate = document.createElement('div')
    climate.className = 'flex-item-clock'

    const climate_max = document.createElement('div')
    climate_max.className = 'climate-max'
    climate_max.innerHTML = '32°C'

    const climate_current = document.createElement('div')
    climate_current.className = 'climate-current'
    climate_current.innerHTML = '23°C'

    const climate_min = document.createElement('div')
    climate_min.className = 'climate-min'
    climate_min.innerHTML = '19°C'

    const flex_climate = document.createElement('div')
    flex_climate.id = 'flex-container-clock'

    const climate_rainy = document.createElement('div')
    climate_rainy.className = 'flex-item-clock'
    climate_rainy.id = 'climate-rainy'
    climate_rainy.innerHTML = icon_rainy
    
    const climate_rainy_p = document.createElement('p')
    climate_rainy_p.innerHTML = '15%'

    const climate_humidity = document.createElement('div')
    climate_humidity.className = 'flex-item-clock'
    climate_humidity.id = 'climate-humidity'
    climate_humidity.innerHTML = icon_humidity

    const climate_humidity_p = document.createElement('p')
    climate_humidity_p.innerHTML = '50%'

    clock.appendChild(clock_hours)
    clock.appendChild(clock_date)

    climate_rainy.appendChild(climate_rainy_p)
    climate_humidity.appendChild(climate_humidity_p)
    
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
  
}
  
export default ClockClimate
  