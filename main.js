// import ToolBeltSearch from './src/components/ToolbeltSearch/ToolbeltSearch.js'
import Navigator from './src/utils/Navigator.js'
import MeasurementConverter from './src/components/MeasurementConverter/MeasurementConverter.js'
import Translator from './src/components/Translator/translator.js'
import CurrencyConverter from './src/components/CurrencyConverter/CurrencyConverter.js'

const screen = Navigator()
screen()

MeasurementConverter()
Translator()
CurrencyConverter()
