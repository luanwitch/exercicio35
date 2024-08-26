import Footer from './components/Footer'
import Header from './components/Header'
import ProductsList from './components/ProductList'

import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <div>
        <GlobalCss />
        <Header />
        <Container>
          <ProductsList />
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default App
