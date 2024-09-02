import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 100%;
  max-width: 300px; /* Reduzindo o tamanho máximo */
  height: auto;
  background-color: ${cores.corVermelha};
  margin-top: 50px;
  padding: 10px;
  color: ${cores.corClara};
  box-sizing: border-box;

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
