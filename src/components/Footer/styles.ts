import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterFundo = styled.div`
  background-color: ${cores.corFooter};
  padding: 20px; /* Adicionar padding para melhor espaçamento */
`

export const FooterLogo = styled.div`
  text-align: center;
  padding-top: 40px;
  img {
    cursor: pointer;
    max-width: 100%; /* Garantir que a imagem do logo seja responsiva */
    height: auto; /* Manter a proporção da imagem */
  }
`

export const RedeSociais = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  img {
    cursor: pointer;
    max-width: 30px; /* Ajustar o tamanho das imagens das redes sociais */
  }
`

export const DescricaoFooter = styled.p`
  text-align: center;
  padding-bottom: 40px;
  font-size: 10px;
  line-height: 22px;
`
