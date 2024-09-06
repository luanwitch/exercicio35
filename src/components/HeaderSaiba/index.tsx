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
import { Link } from 'react-router-dom'

const HeaderSaiba = () => (
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

    <ImageFundoSaiba>
      <StyledContainer>
        <TituloCategorySaiba>Italiana</TituloCategorySaiba>
        <TituloRodizioSaiba>Rodízio de pizzas</TituloRodizioSaiba>
      </StyledContainer>
    </ImageFundoSaiba>
  </>
)

export default HeaderSaiba
