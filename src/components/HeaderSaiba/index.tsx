import {
  HeaderBarSaiba,
  HeaderCarrinho,
  ImageFundoSaiba,
  LogoSaibaMais,
  StyledContainer,
  TituloCategorySaiba,
  TituloRodizioSaiba,
  TituloSaiba
} from './styles'
import logo from '../../assets/image/logo.png'

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
      <StyledContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start', // Garante alinhamento à esquerda
          height: '100%' // Garante que o Container ocupe toda a altura disponível
        }}
      >
        <TituloCategorySaiba>Italiana</TituloCategorySaiba>
        <TituloRodizioSaiba>Rodízio de pizzas</TituloRodizioSaiba>
      </StyledContainer>
    </ImageFundoSaiba>
  </>
)

export default HeaderSaiba
