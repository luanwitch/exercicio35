import {
  HeaderBarSaiba,
  HeaderCarrinho,
  ImageFundoSaiba,
  LogoSaibaMais,
  TituloCategorySaiba,
  TituloRodizioSaiba,
  TituloSaiba
} from './styles'
import logo from '../../assets/image/logo.png'
import { Container } from '../../styles'

const HeaderSaiba = () => (
  <>
    <HeaderBarSaiba>
      <li>
        <TituloSaiba>Restaurantes</TituloSaiba>
      </li>
      <li>
        <LogoSaibaMais src={logo} alt="e-food" />
      </li>
      <li>
        <HeaderCarrinho>
          <a href="">0 produto(s) no carrinho</a>
        </HeaderCarrinho>
      </li>
    </HeaderBarSaiba>

    <ImageFundoSaiba>
      <Container>
        <TituloCategorySaiba>Italiana</TituloCategorySaiba>
        <TituloRodizioSaiba>Rodízio de pizzas</TituloRodizioSaiba>
      </Container>
    </ImageFundoSaiba>
  </>
)

export default HeaderSaiba
