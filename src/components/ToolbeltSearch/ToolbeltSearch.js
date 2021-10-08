import AddCss from "../../utils/addCss.js";

function searchGoogle(){
  const input = document.querySelector('.toolbelt-search-input')
  if(input){
    window.open(`https://www.google.com/search?q=${input.value}`,'_blank')
  }
}

function searchYoutube(){
  const input = document.querySelector('.toolbelt-search-input')
  if(input){
    window.open(`https://www.youtube.com/results?search_query=${input.value}`,'_blank')
  }
  
}

const ToolBeltSearch = () =>{
  const mainContainer = document.querySelector('.main-container')

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
  searchGoogleButton.innerHTML = "<p>Search G<p>"
  searchGoogleButton.onclick = searchGoogle

  var searchYoutubeButton = document.createElement('button')
  searchYoutubeButton.innerHTML = "<p>Search Y<p>"
  searchYoutubeButton.onclick = searchYoutube

  buttonsContainer.appendChild(searchGoogleButton)
  buttonsContainer.appendChild(searchYoutubeButton)

  mainContainer.appendChild(toolbeltSearchContainer)
  mainContainer.appendChild(input)
  mainContainer.appendChild(buttonsContainer)
  AddCss('./src/components/ToolBeltSearch/ToolBeltSearch.css')
}
export default ToolBeltSearch