import styled from 'styled-components'
import { cores } from '../../styles'

export const SectionContainer = styled.div`
  max-width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: ${cores.corClara};
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas */
  gap: 20px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // Duas colunas para tablets
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); // Uma coluna para smartphones
  }
`
