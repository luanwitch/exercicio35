import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Modal = styled.div`
  position: fixed; /* Fixa o modal na tela */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza na tela */
  z-index: 1000;
  width: 1024px;
  height: 344px;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &.visivel {
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row; /* Layout padrão */
  background-color: ${colors.red};
  max-width: ${breakpoints.desktop};
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

      @media (max-width: ${breakpoints.tablet}) {
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

    @media (max-width: ${breakpoints.tablet}) {
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
      color: ${colors.white};
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${colors.white};
      margin-bottom: 20px;
      text-align: justify;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 12px;
        line-height: 18px;
      }
    }

    button {
      width: 218px;
      height: 40px;
      background-color: ${colors.lightRed};
      color: ${colors.red};
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;

      @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        font-size: 12px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column; /* Alinha os elementos em coluna */
    padding: 10px;

    div {
      margin-top: 20px;
    }
  }
`
