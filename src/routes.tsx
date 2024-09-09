import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from './styles'
import Home from './pages/Home'
import HeaderSaiba from './components/HeaderSaiba'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Container>
            <Home />
          </Container>
          <Footer />
        </>
      }
    />
    <Route
      path="/Saibamais"
      element={
        <>
          <HeaderSaiba />
          <Container>
            <Perfil />
          </Container>
          <Footer />
        </>
      }
    />
  </Routes>
)

export default Rotas
