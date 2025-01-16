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

  // Função para lidar com cliques em produtos
  const handleProductClick = (produto: Produto) => {
    console.log('Produto clicado:', produto)
    // Você pode navegar para outra página, abrir um modal ou executar outra ação
  }

  return <PerfilList perfils={cardapio} onProductClick={handleProductClick} />
}

export default Perfil
