import styled from 'styled-components'
import { cores } from '../../styles'
import imgclose from '../../assets/image/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 16px;
  background-color: ${cores.corVermelha};
  z-index: 2;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

export const CartItem = styled.li`
  display: flex;
  align-items: flex-start; /* Alinha os itens no topo */
  gap: 16px; /* Adiciona espaçamento entre os elementos */
  padding: 16px; /* Adiciona um padding interno */
  background-color: ${cores.corClara}; /* Cor de fundo */
  margin-bottom: 16px; /* Espaçamento entre os itens */
  position: relative; /* Permite posicionar a imagem da lixeira absolutamente */

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover; /* Mantém a proporção da imagem */
  }

  h3 {
    color: ${cores.corVermelha};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px; /* Ajuste o espaçamento */
  }

  p {
    color: ${cores.corVermelha};
    font-size: 14px;
  }

  > div:last-child {
    position: absolute; /* Posiciona a imagem da lixeira absolutamente */
    bottom: 16px; /* Distância do fundo */
    right: 16px; /* Distância da direita */
  }
`

export const ImgDel = styled.img`
  width: 16px; /* Tamanho fixo */
  height: 16px; /* Tamanho fixo */
  cursor: pointer; /* Adiciona um cursor pointer para indicar que é clicável */
`

export const Prices = styled.p`
  font-size: 14px;
  color: ${cores.corVermelha};
  margin-bottom: 8px; /* Ajuste o espaçamento */
`

export const PricesT = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.corClara};
  margin-bottom: 16px; /* Ajuste o espaçamento */
`

export const AlinPrices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px; /* Espaçamento abaixo do total */
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.corClara};
  margin-top: 16px; /* Espaçamento acima da quantidade */
  margin-bottom: 16px; /* Espaçamento abaixo da quantidade */
`

export const ButtonContainer = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;

  div {
    padding-bottom: 8px; /* Espaçamento entre os botões */
  }
`

export const ButtonCart = styled.button`
  background-color: ${cores.corClara};
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  color: ${cores.corVermelha};
  border: none;
  padding: 8px; /* Espaçamento interno */
  cursor: pointer; /* Adiciona um cursor pointer para indicar que é clicável */
  transition: background-color 0.3s ease; /* Transição suave */

  &:hover {
    background-color: ${cores.corVermelha};
    color: ${cores.corClara};
  }
`
export const ButtonClose = styled.button`
  background-image: url(${imgclose});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
