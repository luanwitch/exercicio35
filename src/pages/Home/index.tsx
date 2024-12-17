// Home.tsx
import ProductsList from '../../components/ProductList'
import { useEffect, useState } from 'react'

export type Produto = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [cardapio, setCardapio] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
      .catch((error) => console.error('Erro ao buscar dados:', error))
  }, [])

  return (
    <>
      <ProductsList produtos={cardapio} />
    </>
  )
}

export default Home
