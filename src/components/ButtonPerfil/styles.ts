import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonCantainer = styled.button`
  background-color: ${cores.corClara};
  color: ${cores.corVermelha};
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${cores.corVermelha};
    color: ${cores.corClara};
  }
`
