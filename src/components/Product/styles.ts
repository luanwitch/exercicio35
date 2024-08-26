import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  background-color: ${cores.corBranca};
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  border: solid 1px ${cores.corVermelha};

  @media (max-width: 768px) {
    width: 100%; /* Faz com que o card ocupe toda a largura disponível */
    margin: 10px 0; /* Adiciona um espaçamento vertical */
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.corVermelha};
  margin-left: 5px;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte para telas menores */
  }
`

export const Nota = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.corVermelha};
  margin-left: auto;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte para telas menores */
  }
`

export const Estrelinha = styled.img`
  margin-right: 5px;
  max-width: 20px; /* Ajusta o tamanho das imagens para telas menores */
`

export const EnLinha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column; /* Alinha os elementos em coluna em telas menores */
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 5px;
  text-align: justify;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px; /* Reduz o tamanho da fonte para telas menores */
    padding-bottom: 5px; /* Reduz o padding inferior */
  }
`

export const Categoria = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: 768px) {
    position: static; /* Remove a posição absoluta em telas menores */
    margin-top: 10px; /* Adiciona margem superior para dispositivos móveis */
  }
`
