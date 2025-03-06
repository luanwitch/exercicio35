import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const DeliContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  color: ${cores.corClara};

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 100;
  }

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%; /* Altura total da tela */
  max-height: 100vh; /* Altura máxima da viewport */
  padding: 16px;
  background-color: ${cores.corVermelha};
  z-index: 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Ativa o scroll vertical quando necessário */

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%; /* Ocupa toda a largura em telas menores */
    padding: 8px; /* Reduz o padding para telas menores */
    margin-right: 8px;
  }
`
export const Row = styled.div`
  display: block;
  margin-bottom: 56px;
`
export const InputGroup = styled.div<InputGroupProps>`
  label {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    max-width: ${(props) => props.maxWidth || '100%'};
    width: ${(props) => props.maxWidth || '100%'};
    height: 32px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.corVermelha};
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: ${cores.corClara};
  }
`
export const CartContainer = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  margin-top: auto; /* Empurra os botões para o final do sidebar */

  div {
    padding-bottom: 8px;
  }
`

export const ButtonCart = styled.button`
  background-color: ${cores.corClara};
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  color: ${cores.corVermelha};
  border: none;
  margin-bottom: 16px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.corVermelha};
    color: ${cores.corClara};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px; /* Reduz o tamanho da fonte em telas menores */
    padding: 6px; /* Reduz o padding em telas menores */
  }
`
