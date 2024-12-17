// Perfil.tsx
import { useEffect, useState } from 'react'
import PerfilList from '../../components/PerfilList'
import { Produto } from '../Home'

const Perfil = () => {
  const [cardapio, setCardapio] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return <PerfilList perfils={cardapio} onProductClick={Perfil} />
}

export default Perfil
