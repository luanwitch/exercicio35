import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PerfilList from '../../components/PerfilList'
import { Produto } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurantes] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  const handleProductClick = () => {
    console.log('Produto clicado')
  }

  return (
    <PerfilList
      perfils={restaurantes}
      restauranteId={Number(id)}
      onProductClick={handleProductClick}
    />
  )
}

export default Perfil
