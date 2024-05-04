import AddCss from '../../utils/addCss.js'

function stringRemoveNewLine(inputString) {
  var splitArray = inputString.split('\n')
  var outputString = splitArray.length > 0 ? splitArray[0] : ''

  for (var i = 1; i < splitArray.length; i++) {
    outputString = outputString + '¨' + splitArray[i]
  }

  return outputString
}

function stringAddNewLine (formattedText) {
  var splitArray = formattedText.split('¨')
  var originalText = splitArray.length > 0 ? splitArray[0] : ''

  for (var i = 1; i < splitArray.length; i++) {
    originalText = originalText + '\n' + splitArray[i]
  }

  return originalText
}

const NotepadScreen = () => {  
  AddCss('./src/components/NoteScreen/NoteScreen.css')

  const mainContainer = document.querySelector('.main-container')

  const NoteScreenContainer = document.createElement('div')
  NoteScreenContainer.classList.add('note-screen-container')

  const noteTitle = document.createElement('h1')
  noteTitle.innerText = 'Notepad'

  const noteContainer = document.createElement('div')
  noteContainer.classList.add('notepad')

  const noteBox = document.createElement('textarea')

  if (document.cookie.length > 0) {
    var cookie = document.cookie.split('=');
    noteBox.textContent = stringAddNewLine(cookie[1]);
  }

  noteBox.addEventListener('focusout', () => {
    document.cookie = "currentText" + "=" + stringRemoveNewLine(noteBox.value);
  })

  noteContainer.appendChild(noteBox)

  NoteScreenContainer.appendChild(noteTitle)
  NoteScreenContainer.appendChild(noteContainer)

  mainContainer.appendChild(NoteScreenContainer)

}

export const NotepadScreenDestroy = () => {

  const mainContainer = document.querySelector('.main-container')
  mainContainer.querySelector('.note-screen-container').remove()
}

export default NotepadScreen
