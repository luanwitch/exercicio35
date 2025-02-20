import Perfil from '../ProductPerfil'
import { List, SectionContainer } from '../ProductList/styles'
import { Produto } from '../../pages/Home'

export type PerfilProps = {
  perfils: Produto[]
  restauranteId?: number
  onProductClick: (restaurante: Produto, item: Produto['cardapio'][0]) => void
  botaoLabel?: string // 🔹 Adicionamos a propriedade opcional
}

const PerfilList = ({
  perfils,
  restauranteId,
  onProductClick,
  botaoLabel
}: PerfilProps) => {
  // Encontra o restaurante específico
  const restaurante = perfils.find(
    (perfil) => perfil.id === Number(restauranteId)
  )

  if (restauranteId && !restaurante) {
    return (
      <SectionContainer>
        <p>Restaurante não encontrado ou sem pratos disponíveis.</p>
      </SectionContainer>
    )
  }

  if (restauranteId && restaurante) {
    return (
      <SectionContainer>
        <List>
          {restaurante.cardapio.map((item) => (
            <Perfil
              key={`${restaurante.id}-${item.id}`}
              restauranteId={restaurante.id}
              id={item.id}
              title={item.nome}
              image={item.foto}
              description={item.descricao}
              onClick={() => onProductClick(restaurante, item)}
              botaoLabel={botaoLabel} // 🔹 Passamos a label personalizada
            />
          ))}
        </List>
      </SectionContainer>
    )
  }

  // Lista de restaurantes
  return (
    <SectionContainer>
      <List>
        {perfils.map((perfil) => (
          <Perfil
            key={perfil.id}
            restauranteId={perfil.id}
            id={perfil.id}
            title={perfil.titulo}
            image={perfil.capa}
            description={perfil.descricao}
            onClick={() => onProductClick(perfil, perfil.cardapio[0])}
          />
        ))}
      </List>
    </SectionContainer>
  )
}

export default PerfilList
