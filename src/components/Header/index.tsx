import { HeaderBar, HeaderTitle, LogoImage } from './styles'

import logo from '../../assets/image/logo.png'

const Header = () => (
  <HeaderBar>
    <LogoImage src={logo} alt="e-food" />
    <HeaderTitle>
      Viva experiências gastronômicas <br></br>no conforto da sua casa
    </HeaderTitle>
  </HeaderBar>
)

export default Header
