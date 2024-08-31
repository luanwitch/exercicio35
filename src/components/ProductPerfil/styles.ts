import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 380px;
  height: 338px;
  background-color: ${cores.corVermelha};
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 10px;
  color: ${cores.corClara};

  img {
    width: 100%;
  }
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${cores.corClara};
  margin-left: 10px;
`

export const EnLinha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 10px;
  text-align: justify;
  padding-bottom: 10px;
`

export const Categoria = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: 768px) {
    margin-top: 10px; /* Espaço superior para categorias em telas menores */
  }
`
