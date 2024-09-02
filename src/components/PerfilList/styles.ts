import styled from 'styled-components'

export const SectionContainer = styled.div`
  max-width: 100%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas */
  gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Ajusta para duas colunas em telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Ajusta para uma coluna em telas muito pequenas */
  }
`
