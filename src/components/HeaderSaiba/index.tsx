import {
  HeaderBarSaiba,
  ImageFundoSaiba,
  LinkCar,
  Links,
  LinksItem,
  LogoSaibaMais,
  TituloCategorySaiba,
  TituloRodizioSaiba,
  TituloSaiba
} from './styles'
import logo from '../../assets/image/logo.png'
import { Link, useParams } from 'react-router-dom'
import { useGetRestaurantsProductQuery } from '../../services/api'
import { Produto } from '../../pages/Home'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderSaiba = () => {
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
      <HeaderBarSaiba>
        <nav>
          <Links>
            <li>
              <TituloSaiba>Restaurantes</TituloSaiba>
            </li>
            <LinksItem>
              <Link to="/">Home</Link>
            </LinksItem>
            <li>
              <LogoSaibaMais src={logo} alt="e-food" />
            </li>
            <LinksItem>
              <LinkCar onClick={openCart}>
                {items.length} produto(s) no carrinho
              </LinkCar>
            </LinksItem>
          </Links>
        </nav>
      </HeaderBarSaiba>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar dados</p>}

      {/* Renderiza somente se o produto existir */}
      {produto && (
        <ImageFundoSaiba style={{ backgroundImage: `url(${produto.capa})` }}>
          <TituloCategorySaiba>{produto.tipo}</TituloCategorySaiba>
          <TituloRodizioSaiba>{produto.titulo}</TituloRodizioSaiba>
        </ImageFundoSaiba>
      )}
    </>
  )
}

export default HeaderSaiba
