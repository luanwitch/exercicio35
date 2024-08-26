import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 100%; /* Ajustar largura para se adaptar ao tamanho do contêiner */
  max-width: 472px;
  background-color: ${cores.corBranca};
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  border: solid 1px ${cores.corVermelha};
  padding: 15px; /* Adicionar padding para garantir espaço interno adequado */

  img {
    max-width: 100%; /* Garantir que as imagens não excedam o tamanho do contêiner */
    height: auto; /* Manter a proporção das imagens */
    display: block; /* Evitar espaçamento indesejado abaixo da imagem */
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
  margin: 5px;
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
