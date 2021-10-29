import AddCss from "../../utils/addCss.js";

const spinner = `<svg xml:space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" width="22px" height="22px"><g class="ldl-scale" style="transform-origin: 50% 50%; transform: rotate(0deg) scale(0.8, 0.8);"><g class="ldl-ani"><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -0.625s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle fill="#d65a62" r="9.5" cy="16.5" cx="50.5" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -0.694444s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle r="9" fill="#f47e5f" cy="26" cx="26.7" transform="rotate(-45.001 26.665 25.959)" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -0.763889s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle fill="#f7b26a" r="8.5" cy="49.5" cx="16.5" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -0.833333s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle r="8" fill="#acbd81" cy="73.3" cx="26" transform="rotate(-45.001 25.958 73.335)" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -0.902778s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle fill="#d65a62" r="7.5" cy="83.5" cx="49.5" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -0.972222s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle r="7" fill="#f47e5f" cy="74" cx="73.3" transform="rotate(-45.001 73.334 74.043)" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -1.04167s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle fill="#f7b26a" r="6.5" cy="50.5" cx="83.5" style="fill: rgb(20, 40, 80);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-origin: 50px 50px; transform: rotate(0deg); animation: 1.11111s linear -1.11111s infinite normal forwards running spin-3c4f8511-4013-4e79-ac46-90bafe9cc9fd;"><circle r="6" fill="#acbd81" cy="26.7" cx="74" transform="rotate(-45.001 74.042 26.666)" style="fill: rgb(20, 40, 80);"></circle></g></g></g></g></svg>`
const thumbsUp = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Thumbs Up</title><path d="M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 01-64-64v-48a64 64 0 0164-64h30a32.34 32.34 0 0027.37-15.4S162 221.81 188 176.78 264 64 272 48c29 0 43 22 34 47.71-10.28 29.39-23.71 54.38-27.46 87.09-.54 4.78 3.14 12 7.95 12L416 205" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 271l-80-2c-20-1.84-32-12.4-32-30h0c0-17.6 14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 01416 271zM448 336l-112-2c-18-.84-32-12.41-32-30h0c0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0132 32h0a32.1 32.1 0 01-32 32zM400 464l-64-3c-21-1.84-32-11.4-32-29h0c0-17.6 14.4-30 32-30l64-2a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32zM432 400l-96-2c-19-.84-32-12.4-32-30h0c0-17.6 13-28.84 32-30l96-2a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>`
function searchGoogle(){
  const input = document.querySelector('.toolbelt-search-input')
  if(input && input.value!=''){
    window.open(`https://www.google.com/search?q=${input.value}`,'_blank')
  }
}

function searchYoutube(){
  const input = document.querySelector('.toolbelt-search-input')
  if(input && input.value!=''){
    window.open(`https://www.youtube.com/results?search_query=${input.value}`,'_blank')
  }
}

function checkIsItUp(){
  const input = document.querySelector('.toolbelt-search-input')
  if(input && input.value!=''){
    const loading = document.querySelector('.toolbelt-search-loading-div')
    loading.classList.remove('up')
    loading.classList.remove('down')
    loading.innerHTML = spinner

    const request = new XMLHttpRequest()
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(input.value)}`
    request.open("GET", url)
    request.send()
    request.ontimeout = (e) =>{
      loading.classList.add('down')
      loading.innerHTML = thumbsUp
    }

    request.onload = (e) => {
      const data = JSON.parse(request.responseText)
      // console.log(data)
      if(data.contents!=null){
        // console.log(data)
        loading.classList.add('up')
        loading.innerHTML = thumbsUp
      }else{
        loading.classList.add('down')
        loading.innerHTML = thumbsUp
      }
    }
  }
}

const ToolBeltSearch = () =>{
  AddCss('./src/components/ToolbeltSearch/ToolbeltSearch.css')
  const mainContainer = document.querySelector('.main-container')

  const SearchScreenContainer = document.createElement('div')
  SearchScreenContainer.classList.add('search-screen-container')

  const toolbeltSearchContainer = document.createElement('div')
  toolbeltSearchContainer.classList.add('toolbelt-search-container')

  const logoContainer = document.createElement('div')
  logoContainer.classList.add('toolbelt-search-logo-container')

  var bigHeader = document.createElement('h1')
  bigHeader.textContent = "TOOLBELT"
  bigHeader.classList.add('search-container-big-header')

  var smallHeader = document.createElement('h2')
  smallHeader.textContent = "Search"
  smallHeader.classList.add('search-container-small-header')

  logoContainer.appendChild(bigHeader)
  logoContainer.appendChild(smallHeader)

  toolbeltSearchContainer.appendChild(logoContainer)

  const input = document.createElement('input')
  input.classList.add('toolbelt-search-input')

  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList.add('toolbelt-search-buttons-container')

  var searchGoogleButton = document.createElement('button')
  searchGoogleButton.innerHTML = "<p>Search<p>"
  searchGoogleButton.onclick = searchGoogle

  var searchYoutubeButton = document.createElement('button')
  searchYoutubeButton.innerHTML = "<p>Search<p>"
  searchYoutubeButton.onclick = searchYoutube

  buttonsContainer.appendChild(searchGoogleButton)
  buttonsContainer.appendChild(searchYoutubeButton)

  input.addEventListener('keypress',(evt)=>{
    if(evt.key == "Enter"){
      searchGoogle()
    }
  })

  var isItUpContainer = document.createElement('div')
  isItUpContainer.classList.add('toolbelt-search-isitup-container')

  var isItUpButton = document.createElement('button')
  isItUpButton.textContent = "Is it up?"
  isItUpButton.classList.add('toolbelt-search-isitup-button')
  isItUpButton.onclick = checkIsItUp

  var loadingStatus = document.createElement('div')
  loadingStatus.classList.add('toolbelt-search-loading-div')

  isItUpContainer.appendChild(isItUpButton)
  isItUpContainer.appendChild(loadingStatus)


  SearchScreenContainer.appendChild(toolbeltSearchContainer)
  SearchScreenContainer.appendChild(input)
  SearchScreenContainer.appendChild(buttonsContainer)
  SearchScreenContainer.appendChild(isItUpContainer)

  mainContainer.appendChild(SearchScreenContainer)
}

export const ToolbeltSearchDestroy = () => {
  document.querySelector('.search-screen-container').remove()
}
export default ToolBeltSearch