import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from './styles'
import Home from './pages/Home'
import HeaderSaiba from './components/HeaderSaiba'
import Perfil from './pages/Perfil'
import PerfilDetails from './pages/Perfildetails'

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
      path="/Perfil/:id"
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

    <Route
      path="/PerfilDetails"
      element={
        <>
          <HeaderSaiba />
          <Container>
            <PerfilDetails />
          </Container>
          <Footer />
        </>
      }
    />
  </Routes>
)

export default Rotas
