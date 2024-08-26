import { HeaderBar, HeaderTitulo, LogoImagem } from './styles'
import logo from '../../assets/image/logo.png'

const Header = () => (
  <HeaderBar>
    <LogoImagem src={logo} alt="e-food" />
    <HeaderTitulo>
      Viva experiências gastronômicas <br></br>no conforto da sua casa
    </HeaderTitulo>
  </HeaderBar>
)

export default Header
