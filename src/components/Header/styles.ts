import styled from 'styled-components'
import HeaderBackImage from '../../assets/image/header_fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${HeaderBackImage});
  background-size: cover;
  background-position: center;
  height: 254px;
  display: block;
  text-align: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    height: auto; /* Ajusta a altura para dispositivos móveis */
    padding-top: 20px; /* Reduz o padding superior */
  }
`

export const HeaderTitulo = styled.h1`
  padding-top: 56px;
  font-size: 36px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduz o tamanho da fonte para telas menores */
  }
`
