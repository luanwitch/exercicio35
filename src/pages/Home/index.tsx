import ProductsList from '../../components/ProductList'
import { useGetRestaurantsProductQuery } from '../../services/api'

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
  const {
    data: cardapio = [],
    isLoading,
    error
  } = useGetRestaurantsProductQuery()

  if (isLoading) return <p>Carregando restaurantes...</p>
  if (error) return <p>Erro ao carregar os restaurantes.</p>

  return (
    <>
      <ProductsList produtos={cardapio} />
    </>
  )
}

export default Home
