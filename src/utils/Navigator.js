import ToolBeltSearch, {ToolbeltSearchDestroy} from "../components/ToolbeltSearch/ToolbeltSearch.js"
import CalendarScreen, {CalendarScreenDestroy} from "../components/CalendarScreen/CalendarScreen.js"

var CurrentSelectedMenuItem = {
  screen: ToolBeltSearch,
  destroy: ToolbeltSearchDestroy,
}

const CreateToolbeltMenuListeners = () => {
  const search = document.getElementById('menu-item-search')
  const calendar = document.getElementById('menu-item-calendar')
  calendar.addEventListener('click', () => {
    CurrentSelectedMenuItem.destroy()
    CurrentSelectedMenuItem = {
      screen: CalendarScreen,
      destroy: CalendarScreenDestroy
    }
    CalendarScreen()
  })
  search.addEventListener('click', () => {
    CurrentSelectedMenuItem.destroy()
    CurrentSelectedMenuItem = {
      screen: ToolBeltSearch,
      destroy: ToolbeltSearchDestroy
    }
    ToolBeltSearch()
  })
}

const Navigator = () => {
  CreateToolbeltMenuListeners()
  // Homepage
  return ToolBeltSearch
}

export default Navigator