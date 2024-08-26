import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corVermelha};
  color: ${cores.corClara};
  padding: 4px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
`
