import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import ScrollToTop from './components/ScrollToTop' // Importe o componente
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <ScrollToTop />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
