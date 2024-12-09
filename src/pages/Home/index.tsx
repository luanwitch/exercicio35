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
}

const Home = () => {
  const [cardapio, setCardapio] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <ProductsList produtos={cardapio} />
    </>
  )
}

export default Home
