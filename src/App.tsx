import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container, GlobalCss } from './styles'
import Home from './pages/Home'
import HeaderSaiba from './components/HeaderSaiba'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Container>
          <Home />
        </Container>
        <Footer />
      </>
    )
  },
  {
    path: '/Saibamais',
    element: (
      <>
        <HeaderSaiba />
        <Container>
          {/* Componente específico da página "Saiba mais" */}
        </Container>
        <Footer />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
