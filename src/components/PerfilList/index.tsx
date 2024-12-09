import Perfil from '../ProductPerfil'
import { List, SectionContainer } from '../ProductList/styles'
import { ProdutoPerfil } from '../../pages/Perfil'

export type PerfilProps = {
  perfils: ProdutoPerfil[]
  onProductClick: (perfil: ProdutoPerfil) => void
}

const PerfilList = ({ perfils, onProductClick }: PerfilProps) => (
  <SectionContainer>
    <List>
      {perfils.map((perfil) => (
        <Perfil
          key={perfil.cardapio.id}
          title={perfil.cardapio.nome}
          image={perfil.cardapio.foto}
          description={perfil.cardapio.descricao}
          onClick={() => onProductClick(perfil)}
        />
      ))}
    </List>
  </SectionContainer>
)

export default PerfilList
