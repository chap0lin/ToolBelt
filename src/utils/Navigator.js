import ToolBeltSearch, {ToolbeltSearchDestroy} from "../components/ToolbeltSearch/ToolbeltSearch.js"
import CalendarScreen, {CalendarScreenDestroy} from "../components/CalendarScreen/CalendarScreen.js"
import NotepadScreen, {NotepadScreenDestroy} from "../components/NoteScreen/NoteScreen.js"
import PaintScreen, {PaintScreenDestroy} from "../components/PaintScreen/PaintScreen.js"
import ClockScreen, {ClockScreenDestroy} from "../components/ClockScreen/ClockScreen.js"
import LuckScreen, {LuckScreenDestroy} from "../components/LuckScreen/LuckScreen.js"

var CurrentSelectedMenuItem = {
  id: 'menu-item-search',
  screen: ToolBeltSearch,
  destroy: ToolbeltSearchDestroy,
}

const NavigateToScreen = (screen, destroy, id) => {
  CurrentSelectedMenuItem.destroy()
  document.getElementById(CurrentSelectedMenuItem.id).classList.remove('selected-menu-item')
  document.getElementById(id).classList.add('selected-menu-item')
  CurrentSelectedMenuItem = {
    id,
    screen,
    destroy
  }
  screen()
}

const CreateToolbeltMenuListeners = () => {
  const search = document.getElementById('menu-item-search')
  const calendar = document.getElementById('menu-item-calendar')
  const notepad = document.getElementById('menu-item-note')
  const paint = document.getElementById('menu-item-paint')
  const clock = document.getElementById('menu-item-clock')
  const luck = document.getElementById('menu-item-luck')

  search.addEventListener('click', () => {
    NavigateToScreen(ToolBeltSearch, ToolbeltSearchDestroy, 'menu-item-search')
  })

  calendar.addEventListener('click', () => {
    NavigateToScreen(CalendarScreen, CalendarScreenDestroy, 'menu-item-calendar')
  })

  notepad.addEventListener('click', () => {
    NavigateToScreen(NotepadScreen, NotepadScreenDestroy, 'menu-item-note')
  })

  paint.addEventListener('click', () => {
    NavigateToScreen(PaintScreen, PaintScreenDestroy, 'menu-item-paint')
  })
  
  luck.addEventListener('click', () => {
    NavigateToScreen(LuckScreen, LuckScreenDestroy, 'menu-item-luck')
  })

  clock.addEventListener('click', () => {
    NavigateToScreen(ClockScreen, ClockScreenDestroy, 'menu-item-clock')
  })
}

const Navigator = () => {
  CreateToolbeltMenuListeners()

  // Homepage
  return CurrentSelectedMenuItem.screen
}

export default Navigator