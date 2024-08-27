import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonCantainer = styled.button`
  background-color: ${cores.corVermelha};
  color: ${cores.corClara};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.corVermelha};
  color: ${cores.corClara};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
`
