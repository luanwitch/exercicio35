import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import {
  HeaderBarKnow,
  ImageBottomKnow,
  LinkCar,
  Links,
  LinksItem,
  LogoLearnMore,
  TitleCategoryKnow,
  TitleKnow,
  TitleLearnMore
} from './styles'

import { Produto } from '../../pages/Home'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useGetRestaurantsProductQuery } from '../../services/api'

import logo from '../../assets/image/logo.png'

const HeaderKnow = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetRestaurantsProductQuery()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  // Encontra o restaurante com o ID correspondente
  const produto = data
    ? data.find((item: Produto) => item.id === Number(id))
    : null

  return (
    <>
      <HeaderBarKnow>
        <nav>
          <Links>
            <li>
              <TitleKnow>Restaurantes</TitleKnow>
            </li>
            <LinksItem>
              <Link title="Clique aqui para voltar a Home" to="/">
                Home
              </Link>
            </LinksItem>
            <li>
              <LogoLearnMore src={logo} alt="e-food" />
            </li>
            <LinksItem>
              <LinkCar
                title="Clique aqui para abrir o carrinho"
                role="button"
                onClick={openCart}
              >
                {items.length} produto(s) no carrinho
              </LinkCar>
            </LinksItem>
          </Links>
        </nav>
      </HeaderBarKnow>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar dados</p>}

      {/* Renderiza somente se o produto existir */}
      {produto && (
        <ImageBottomKnow style={{ backgroundImage: `url(${produto.capa})` }}>
          <TitleCategoryKnow>{produto.tipo}</TitleCategoryKnow>
          <TitleLearnMore>{produto.titulo}</TitleLearnMore>
        </ImageBottomKnow>
      )}
    </>
  )
}

export default HeaderKnow
