import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import ScrollToTop from './components/ScrollToTop' // Importe o componente
import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <ScrollToTop />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
