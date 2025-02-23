import styled from 'styled-components'
import HeaderBackImage from '../../assets/image/header_fundo.png'
import { cores } from '../../styles'

export const HeaderBarSaiba = styled.header`
  background-image: url(${HeaderBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 56px 20px; /* Padding ajustado */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 135px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 25px;
    flex-direction: column;
    align-items: center;
  }
`

export const LinksItem = styled.li`
  a {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.corVermelha};
    text-decoration: none;
  }
`

export const TituloSaiba = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.corVermelha};
`

export const LogoSaibaMais = styled.img`
  width: 125px;
  height: 57px;
`

export const ImageFundoSaiba = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative; /* Permite posicionamento absoluto dos elementos internos */
`

export const TituloCategorySaiba = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.corBranca};
  position: absolute;
  top: 24px; /* Posiciona no canto superior */
  left: 24px; /* Posiciona no canto esquerdo */
`

export const TituloRodizioSaiba = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.corBranca};
  position: absolute;
  bottom: 24px; /* Posiciona no canto inferior */
  left: 24px; /* Posiciona no canto esquerdo */
`

export const LinkCar = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.corVermelha};
  text-decoration: none;
  cursor: pointer;
`
