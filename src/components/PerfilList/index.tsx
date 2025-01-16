import Perfil from '../ProductPerfil'
import { List, SectionContainer } from '../ProductList/styles'
import { useParams } from 'react-router-dom'
import { Produto } from '../../pages/Home'

export type PerfilProps = {
  perfils: Produto[] // Lista de restaurantes
  onProductClick: (perfil: Produto, item: Produto['cardapio'][0]) => void // Função ao clicar no prato
}

const PerfilList = ({ perfils, onProductClick }: PerfilProps) => {
  const { id } = useParams() // Obtém o ID do restaurante via URL

  // Filtra o restaurante correspondente ao ID
  const filteredPerfils = id
    ? perfils.filter((perfil) => perfil.id === Number(id)) // Filtra apenas o restaurante com o ID correspondente
    : []

  return (
    <SectionContainer>
      <List>
        {filteredPerfils.length > 0 ? (
          filteredPerfils.map((restaurante) =>
            restaurante.cardapio.map((item) => (
              <Perfil
                key={item.id}
                id={item.id}
                title={item.nome}
                image={item.foto}
                description={item.descricao}
                onClick={() => onProductClick(restaurante, item)} // Apenas abre o modal
              />
            ))
          )
        ) : (
          <p>Restaurante não encontrado ou sem pratos disponíveis.</p>
        )}
      </List>
    </SectionContainer>
  )
}

export default PerfilList
