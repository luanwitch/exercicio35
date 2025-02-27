import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import ScrollToTop from './components/ScrollToTop' // Importe o componente
import Rotas from './routes'
import { store } from './store'
import Cart from './components/Cart'
import Delivery from './components/Delivery'
import FinalDelivery from './components/FinalDelivery'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <ScrollToTop />
        <Rotas />
        <Cart />
        <Delivery />
        <FinalDelivery />
      </BrowserRouter>
    </Provider>
  )
}

export default App
