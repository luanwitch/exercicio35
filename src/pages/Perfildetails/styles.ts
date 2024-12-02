import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: absolute;
  top: 399px;
  left: 110px;
  width: 1045px;
  height: 600px;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${cores.corVermelha};
  max-width: 1024px;
  width: 90%;
  padding: 38px;
  position: relative;

  header {
    position: absolute;
    top: 10px;
    right: 10px;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  img {
    width: 340px;
    height: 340px;
    margin-right: 20px; /* Espaçamento entre imagem e conteúdo */
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1; /* Ocupa o espaço restante ao lado da imagem */

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: ${cores.corBranca};
      margin-bottom: 10px; /* Espaçamento entre título e descrição */
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${cores.corBranca};
      margin-bottom: 20px; /* Espaçamento entre descrição e botão */
      text-align: justify;
    }

    button {
      width: 218px;
      height: 40px;
      background-color: ${cores.corClara};
      color: ${cores.corVermelha};
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`
