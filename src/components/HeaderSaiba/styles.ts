import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

import HeaderBackImage from '../../assets/image/header_fundo.png'

export const HeaderBarKnow = styled.header`
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

  @media (max-width: ${breakpoints.tablet}) {
    gap: 25px;
    flex-direction: column;
    align-items: center;
  }
`

export const LinksItem = styled.li`
  a {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.red};
    text-decoration: none;
  }
`

export const TitleKnow = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.red};
`

export const LogoLearnMore = styled.img`
  width: 125px;
  height: 57px;
`

export const ImageBottomKnow = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative; /* Permite posicionamento absoluto dos elementos internos */
`

export const TitleCategoryKnow = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  position: absolute;
  top: 24px; /* Posiciona no canto superior */
  left: 24px; /* Posiciona no canto esquerdo */
`

export const TitleLearnMore = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
  position: absolute;
  bottom: 24px; /* Posiciona no canto inferior */
  left: 24px; /* Posiciona no canto esquerdo */
`

export const LinkCar = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.red};
  text-decoration: none;
  cursor: pointer;
`
