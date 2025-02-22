import {
  HeaderBarSaiba,
  ImageFundoSaiba,
  LinkCar,
  Links,
  LinksItem,
  LogoSaibaMais,
  StyledContainer,
  TituloCategorySaiba,
  TituloRodizioSaiba,
  TituloSaiba
} from './styles'
import logo from '../../assets/image/logo.png'
import { Link, useParams } from 'react-router-dom'
import { useGetRestaurantsProductQuery } from '../../services/api'
import { Produto } from '../../pages/Home'

const HeaderSaiba = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetRestaurantsProductQuery()

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
              <LinkCar href="#">0 produto(s) no carrinho</LinkCar>
            </LinksItem>
          </Links>
        </nav>
      </HeaderBarSaiba>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar dados</p>}

      {/* Renderiza somente se o produto existir */}
      {produto && (
        <ImageFundoSaiba style={{ backgroundImage: `url(${produto.capa})` }}>
          <StyledContainer>
            <TituloCategorySaiba>{produto.tipo}</TituloCategorySaiba>
            <TituloRodizioSaiba>{produto.titulo}</TituloRodizioSaiba>
          </StyledContainer>
        </ImageFundoSaiba>
      )}
    </>
  )
}

export default HeaderSaiba
