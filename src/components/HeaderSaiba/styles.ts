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

export const TituloSaiba = styled.h1`
  font-size: 24px;
  font-weight: 900;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const LogoSaibaMais = styled.img`
  width: 180px;

  @media (max-width: 768px) {
    width: 80px;
  }
`

export const LinkCar = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.corVermelha};
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
  }
`

export const ImageFundoSaiba = styled.div`
  background-repeat: no-repeat;
  background-size: cover; /* Garante que a imagem preencha a área sem distorcer */
  background-position: center; /* Centraliza a imagem */
  position: relative;
  width: 100%;
  max-width: 1366px;
  height: 280px;
  margin: 0 auto;
  padding: 0 20px;

  /* Melhorar a qualidade de renderização */
  image-rendering: auto;

  /* Camada de escurecimento */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Camada preta com 50% de opacidade */
    z-index: 1;
  }

  /* Garantir que o conteúdo fique acima do escurecimento */
  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 994px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`

export const TituloCategorySaiba = styled.h1`
  padding-top: 10px;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.corBranca};
  opacity: 0.6;
  text-align: left;
  margin-bottom: auto;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`

export const TituloRodizioSaiba = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.corBranca};
  text-align: left;
  margin-top: auto;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`
