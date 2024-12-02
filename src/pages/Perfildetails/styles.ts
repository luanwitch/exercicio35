import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: absolute;
  top: 399px;
  left: 110px;
  z-index: 1000;
  width: 1045px;
  height: 600px;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  @media (max-width: 768px) {
    top: 515px;
    left: 10px;
    width: 95%;
    height: auto;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row; /* Layout padrão */
  background-color: ${cores.corVermelha};
  max-width: 1024px;
  width: 90%;
  padding: 28px;
  position: relative;

  header {
    position: absolute;
    top: 10px;
    right: 10px;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;

      @media (max-width: 768px) {
        display: block;
        width: 15px;
        height: 15px;
        padding: 0;
      }
    }
  }

  img {
    width: 340px;
    height: 340px;
    margin-right: 20px;

    @media (max-width: 768px) {
      padding-top: 20px;
      width: 100%;
      height: auto;
      margin-right: 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: ${cores.corBranca};
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${cores.corBranca};
      margin-bottom: 20px;
      text-align: justify;

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      }
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

      @media (max-width: 768px) {
        width: 100%;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Alinha os elementos em coluna */
    padding: 10px;

    div {
      margin-top: 20px;
    }
  }
`
