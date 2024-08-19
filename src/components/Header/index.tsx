import { HeaderBar, HeaderTitulo } from './styles'
import logo from '../../assets/image/logo.png'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="e-food" />
    <HeaderTitulo>
      Viva experiências gastronômicas <br></br>no conforto da sua casa
    </HeaderTitulo>
  </HeaderBar>
)

export default Header
