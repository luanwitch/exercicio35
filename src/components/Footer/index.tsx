import {
  DescriptionFooter,
  FooterBottom,
  FooterLogo,
  SocialNetworks
} from './styles'
import { Container } from '../../styles'
import { LogoImage } from '../Header/styles'

import logo from '../../assets/image/logo.png'
import insta from '../../assets/image/instagram-round-svgrepo-com.png'
import face from '../../assets/image/facebook.png'
import x from '../../assets/image/x.png'

const Footer = () => (
  <FooterBottom>
    <div>
      <FooterLogo>
        <LogoImage src={logo} alt="logo" />
      </FooterLogo>

      <div>
        <SocialNetworks>
          <li>
            <img src={insta} alt="instagram" />
          </li>
          <li>
            <img src={face} alt="facebook" />
          </li>
          <li>
            <img src={x} alt="x" />
          </li>
        </SocialNetworks>
        <Container>
          <DescriptionFooter>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade <br /> dos produtos é toda
            do estabelecimento contratado.
          </DescriptionFooter>
        </Container>
      </div>
    </div>
  </FooterBottom>
)

export default Footer
