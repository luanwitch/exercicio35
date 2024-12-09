import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  background-color: ${cores.corBranca};
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  border: solid 1px ${cores.corVermelha};
  padding-bottom: 10px;

  img {
    width: 100%;
    max-height: 315px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.corVermelha};
  margin-left: 5px;
`

export const Nota = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.corVermelha};
  margin-left: auto;
  margin-right: 10px;
`

export const Estrelinha = styled.img`
  max-width: 4%;
  margin-right: 5px;
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
  line-height: 22px;
  display: block;
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
