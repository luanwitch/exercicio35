import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterFundo = styled.div`
  background-color: ${cores.corFooter};
  padding: 40px 20px; /* Adiciona padding interno */

  @media (max-width: 768px) {
    padding: 20px 10px; /* Reduz o padding para dispositivos móveis */
  }
`

export const FooterLogo = styled.div`
  text-align: center;
  img {
    cursor: pointer;
    max-width: 100%; /* Garante que a imagem não ultrapasse a largura do container */
    height: auto; /* Mantém a proporção da imagem */
  }
`

export const RedeSociais = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 50px 0;

  img {
    cursor: pointer;
    max-width: 40px; /* Ajusta o tamanho das imagens sociais */
  }

  @media (max-width: 768px) {
    padding: 30px 0; /* Reduz o padding para dispositivos móveis */
    flex-wrap: wrap; /* Permite que as imagens se ajustem em várias linhas */
  }
`

export const DescricaoFooter = styled.p`
  text-align: center;
  padding-bottom: 40px;
  font-size: 10px;
  line-height: 22px;

  @media (max-width: 768px) {
    font-size: 8px; /* Reduz o tamanho da fonte para telas menores */
    padding-bottom: 20px; /* Reduz o padding inferior */
  }
`
