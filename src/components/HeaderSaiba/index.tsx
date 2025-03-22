import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import * as S from './styles'

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
      <S.HeaderBarKnow>
        <nav>
          <S.Links>
            <li>
              <S.TitleKnow>Restaurantes</S.TitleKnow>
            </li>
            <S.LinksItem>
              <Link title="Clique aqui para voltar a Home" to="/">
                Home
              </Link>
            </S.LinksItem>
            <li>
              <S.LogoLearnMore src={logo} alt="e-food" />
            </li>
            <S.LinksItem>
              <S.LinkCar
                title="Clique aqui para abrir o carrinho"
                role="button"
                onClick={openCart}
              >
                {items.length} produto(s) no carrinho
              </S.LinkCar>
            </S.LinksItem>
          </S.Links>
        </nav>
      </S.HeaderBarKnow>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar dados</p>}

      {/* Renderiza somente se o produto existir */}
      {produto && (
        <S.ImageBottomKnow style={{ backgroundImage: `url(${produto.capa})` }}>
          <S.TitleCategoryKnow>{produto.tipo}</S.TitleCategoryKnow>
          <S.TitleLearnMore>{produto.titulo}</S.TitleLearnMore>
        </S.ImageBottomKnow>
      )}
    </>
  )
}

export default HeaderKnow
