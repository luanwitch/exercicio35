import logo from '../../assets/image/logo.png'
import insta from '../../assets/image/instagram-round-svgrepo-com.png'
import face from '../../assets/image/facebook.png'
import x from '../../assets/image/x.png'
import { DescricaoFooter, FooterFundo, FooterLogo, RedeSociais } from './styles'
import { Container } from '../../styles'
import { LogoImagem } from '../Header/styles'

const Footer = () => (
  <FooterFundo>
    <div>
      <FooterLogo>
        <LogoImagem src={logo} alt="logo" />
      </FooterLogo>

      <div>
        <RedeSociais>
          <li>
            <img src={insta} alt="instagram" />
          </li>
          <li>
            <img src={face} alt="facebook" />
          </li>
          <li>
            <img src={x} alt="x" />
          </li>
        </RedeSociais>
        <Container>
          <DescricaoFooter>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade <br /> dos produtos é toda
            do estabelecimento contratado.
          </DescricaoFooter>
        </Container>
      </div>
    </div>
  </FooterFundo>
)

export default Footer
