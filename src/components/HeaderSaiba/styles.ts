import styled from 'styled-components'
import HeaderBackImage from '../../assets/image/header_fundo.png'
import { cores } from '../../styles'
import ImageBackSaiba from '../../assets/image/pizzas_fundo.jpeg'

export const HeaderBarSaiba = styled.header`
  background-image: url(${HeaderBackImage});
  display: flex;
  gap: 200px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding-top: 20px; /* Reduz o padding superior */
  }

  padding-top: 56px;
  font-size: 36px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduz o tamanho da fonte para telas menores */
  }
`
export const TituloSaiba = styled.h1`
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  text-align: center;
  margin-left: 168px;
  margin-top: 21px;
`
export const LogoSaibaMais = styled.img`
  width: 45%;
  height: 58px;
  margin-left: 158px;
  margin-top: 16px;
`
export const HeaderCarrinho = styled.div`
  margin-top: 21px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  a {
    text-decoration: none;
    color: ${cores.corVermelha};
  }
`
export const ImageFundoSaiba = styled.div`
  position: relative; /* Necessário para posicionar o overlay */
  width: 1366px;
  height: 280px; /* Ajuste de altura conforme necessário */
  color: ${cores.corVermelha};

  /* Camada de overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${ImageBackSaiba});
    background-size: cover;
    background-position: center;
    filter: brightness(50%); /* Escurece apenas a imagem de fundo */
    z-index: 1; /* Coloca o overlay abaixo do conteúdo */
  }

  /* Ajusta o z-index dos elementos internos para estarem acima do pseudo-elemento */
  & > * {
    position: relative;
    z-index: 2;
  }
`
export const TituloCategorySaiba = styled.h1`
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  color: ${cores.corBranca};
  opacity: 0.6;
  text-align: left;
`

export const TituloRodizioSaiba = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  color: ${cores.corBranca};
  text-align: left;
`
