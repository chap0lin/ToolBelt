import AddCss from '../../utils/addCss.js'

const icon = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Swap Horizontal</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"/></svg>`

var englishInput, portugueseInput
var lang = 'en-pt'

function requestTranslation() {
  const request = new XMLHttpRequest()
  var input = lang == 'en-pt' ? englishInput.value : portugueseInput.value
  const url = `https://dictionary.yandex.net/dicservice.json/lookupMultiple?text=${input}&dict=${lang}.regular`
  request.open('GET', url)
  request.send()

  request.onload = e => {
    const data = JSON.parse(request.responseText)
    console.log(data)
    if (data['en-pt'] != null) {
      if (data['en-pt'].regular.length > 0) {
        portugueseInput.value = data['en-pt'].regular[0].tr[0].text
        englishInput.style.border = '1px solid #142850'
        portugueseInput.style.border = '1px solid #142850'
      } else {
        englishInput.style.border = '1px solid #a4363b'
        portugueseInput.value = ''
      }
    } else if (data['pt-en'] != null) {
      if (data['pt-en'].regular.length > 0) {
        englishInput.value = data['pt-en'].regular[0].tr[0].text
        portugueseInput.style.border = '1px solid #142850'
        englishInput.style.border = '1px solid #142850'
      } else {
        englishInput.value = ''
        portugueseInput.style.border = '1px solid #a4363b'
      }
    }
  }
}

const Translator = () => {
  AddCss('./src/components/Translator/translator.css')
  const container = document.getElementById('translator')

  const englishContainer = document.createElement('div')
  const englishTitleBox = document.createElement('div')
  const englishTitle = document.createElement('h1')
  englishTitle.innerText = 'English'
  englishInput = document.createElement('textarea')

  const swapIcon = document.createElement('button')
  swapIcon.classList.add('translate-button')
  swapIcon.innerHTML = icon

  const portugueseContainer = document.createElement('div')
  const portugueseTitleBox = document.createElement('div')
  const portugueseTitle = document.createElement('h1')
  portugueseTitle.innerText = 'Portuguese'
  portugueseInput = document.createElement('textarea')

  englishInput.addEventListener('focus', () => {
    lang = 'en-pt'
  })

  portugueseInput.addEventListener('focus', () => {
    lang = 'pt-en'
  })

  swapIcon.addEventListener('click', () => {
    requestTranslation()
  })

  englishTitleBox.appendChild(englishTitle)
  englishContainer.appendChild(englishTitleBox)
  englishContainer.appendChild(englishInput)

  portugueseTitleBox.appendChild(portugueseTitle)
  portugueseContainer.appendChild(portugueseTitleBox)
  portugueseContainer.appendChild(portugueseInput)

  container.appendChild(englishContainer)
  container.appendChild(swapIcon)
  container.appendChild(portugueseContainer)
}

export default Translator
