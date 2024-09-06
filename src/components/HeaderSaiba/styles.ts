import styled from 'styled-components'
import HeaderBackImage from '../../assets/image/header_fundo.png'
import { cores } from '../../styles'
import ImageBackSaiba from '../../assets/image/pizzas_fundo.jpeg'

export const HeaderBarSaiba = styled.header`
  background-image: url(${HeaderBackImage});
  padding: 56px 20px 60px; /* Adicionado padding lateral */
  display: flex;
  justify-content: center; /* Centralizar o conteúdo */
  align-items: center; /* Centralizar verticalmente */
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between; /* Distribui os itens */
  align-items: center;
  gap: 135px; /* Diminui o espaço entre itens */
  width: 100%;
  max-width: 1200px; /* Define um max-width para o container */

  @media (max-width: 768px) {
    gap: 25px; /* Reduzindo o gap */
    flex-direction: column; /* Mudando para coluna em telas menores */
    align-items: center; /* Centralizando os itens */
  }
`

export const LinksItem = styled.li`
  a {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    color: ${cores.corVermelha};
    text-decoration: none;
  }
`

export const TituloSaiba = styled.h1`
  font-size: 24px; /* Tamanho ajustado */
  font-weight: 900;
  line-height: 22px;
  text-align: center;
  margin: 0; /* Remove margens */
  padding: 0; /* Remove padding */
  display: flex;
  align-items: center; /* Alinha verticalmente no centro */

  @media (max-width: 768px) {
    font-size: 18px; /* Reduzindo tamanho da fonte */
  }
`

export const LogoSaibaMais = styled.img`
  width: 180px; /* Tamanho da logo */
  height: auto;
  margin: 0 auto; /* Centraliza a logo horizontalmente */

  @media (max-width: 768px) {
    width: 80px; /* Ajustando tamanho da logo em telas menores */
  }
`

export const LinkCar = styled.a`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.corVermelha};
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px; /* Reduzindo tamanho da fonte */
    margin-top: 10px; /* Ajustando margem superior */
  }
`

export const ImageFundoSaiba = styled.div`
  position: relative; /* Necessário para posicionar o overlay */
  width: 100%;
  max-width: 1366px;
  height: 280px; /* Ajuste de altura conforme necessário */
  color: ${cores.corVermelha};
  margin: 0 auto; /* Centralizar o contêiner horizontalmente */
  padding: 0 20px; /* Adiciona padding lateral */

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
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 200px; /* Ajustando altura para telas menores */
  }
`

export const TituloCategorySaiba = styled.h1`
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  color: ${cores.corBranca};
  opacity: 0.6;
  text-align: left;
  margin-top: 20px; /* Espaçamento do topo */

  @media (max-width: 768px) {
    font-size: 24px; /* Reduzindo tamanho da fonte */
    text-align: center; /* Centralizando texto */
    margin-top: 10px; /* Ajustando margem superior */
  }
`

export const TituloRodizioSaiba = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  color: ${cores.corBranca};
  text-align: left;
  margin-bottom: 20px; /* Espaçamento da parte inferior */

  @media (max-width: 768px) {
    font-size: 24px; /* Reduzindo tamanho da fonte */
    text-align: center; /* Centralizando texto */
    margin-bottom: 10px; /* Ajustando margem inferior */
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; /* Garante alinhamento à esquerda */
  width: 100%;
  max-width: 994px; /* Use o mesmo valor de max-width dos Cards */
  padding: 0 20px; /* Padding lateral para alinhar com os Cards */
  box-sizing: border-box; /* Inclui padding no cálculo da largura */
  margin: 0 auto; /* Centraliza o container */
  height: 100%; /* Garante que o Container ocupe toda a altura disponível */

  @media (max-width: 768px) {
    max-width: 100%; /* Usar largura total em telas menores */
    padding: 0 10px; /* Reduzindo padding */
  }
`
