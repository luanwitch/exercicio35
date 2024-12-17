import Perfil from '../ProductPerfil'
import { List, SectionContainer } from '../ProductList/styles'
import { useParams } from 'react-router-dom'
import { Produto } from '../../pages/Home'

export type PerfilProps = {
  perfils: Produto[] // Lista de restaurantes
  onProductClick: (perfil: Produto) => void // Função chamada ao clicar no prato
}

const PerfilList = ({ perfils, onProductClick }: PerfilProps) => {
  const { id } = useParams() // Obtém o id do restaurante na URL

  // Filtra os itens de cardápio com base no ID do restaurante e a condição específica
  const filteredPerfils = id
    ? perfils
        .map((perfil) => {
          // Filtra os pratos com base no id do restaurante e nos ranges de sub ids
          if (perfil.id === Number(id)) {
            // Verifica qual o id do restaurante e aplica os filtros conforme o id
            if (id === '1') {
              return {
                ...perfil,
                cardapio: perfil.cardapio.filter(
                  (item) => item.id >= 1 && item.id <= 7
                ) // Para id=1, filtra de id 1 a 7
              }
            } else if (id === '2') {
              return {
                ...perfil,
                cardapio: perfil.cardapio.filter(
                  (item) => item.id >= 8 && item.id <= 10
                ) // Para id=2, filtra de id 8 a 10
              }
            } else if (id === '3') {
              return {
                ...perfil,
                cardapio: perfil.cardapio.filter(
                  (item) => item.id >= 11 && item.id <= 13
                ) // Para id=3, filtra de id 11 a 13
              }
            } else if (id === '4') {
              return {
                ...perfil,
                cardapio: perfil.cardapio.filter(
                  (item) => item.id >= 14 && item.id <= 16
                ) // Para id=4, filtra de id 14 a 16
              }
            } else if (id === '5') {
              return {
                ...perfil,
                cardapio: perfil.cardapio.filter(
                  (item) => item.id >= 17 && item.id <= 19
                ) // Para id=5, filtra de id 17 a 19
              }
            } else if (id === '6') {
              return {
                ...perfil,
                cardapio: perfil.cardapio.filter(
                  (item) => item.id >= 20 && item.id <= 22
                ) // Para id=6, filtra de id 20 a 22
              }
            }
            // Caso o id não seja específico, retorna todos os pratos
            return perfil
          }
          return null // Caso o id não corresponda, retorna null (não exibe esse restaurante)
        })
        .filter(
          (perfil): perfil is Produto =>
            perfil !== null && perfil.cardapio.length > 0
        ) // Remove nulls e restaurantes sem pratos
    : perfils // Caso não tenha id na URL, retorna todos os perfis

  return (
    <SectionContainer>
      <List>
        {filteredPerfils?.map((perfil) => {
          return perfil.cardapio.map((item) => (
            <Perfil
              key={item.id}
              title={item.nome}
              image={item.foto}
              description={item.descricao}
              onClick={() => onProductClick(perfil)} // Passa o restaurante ao clicar
            />
          ))
        })}
      </List>
    </SectionContainer>
  )
}

export default PerfilList
