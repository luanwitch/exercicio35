import styled from 'styled-components'

export const SectionContainer = styled.section`
  @media (max-width: 768px) {
    padding: 10px; /* Adiciona padding interno em dispositivos móveis */
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Ajusta para uma coluna em telas menores */
    row-gap: 20px; /* Adiciona espaçamento entre linhas */
  }
`
