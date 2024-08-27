import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corVermelha};
  color: ${cores.corClara};
  padding: 4px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 3px;
  }
`
