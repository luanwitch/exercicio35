import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterFundo = styled.div`
  background-color: ${cores.corFooter};
`

export const FooterLogo = styled.div`
  text-align: center;
  padding-top: 40px;
  img {
    cursor: pointer;
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
  }
`
export const DescricaoFooter = styled.p`
  text-align: center;
  padding-bottom: 40px;
  font-size: 10px;
  line-height: 22px;
`
