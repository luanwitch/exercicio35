import Perfil from '../ProductPerfil'
import ProdutoPerfil from '../../models/ProdutoPerfil'
import { List, SectionContainer } from '../ProductList/styles'

export type PerfilProps = {
  perfils: ProdutoPerfil[]
  onProductClick: (perfil: ProdutoPerfil) => void
}

const PerfilList = ({ perfils, onProductClick }: PerfilProps) => (
  <SectionContainer>
    <List>
      {perfils.map((perfil) => (
        <Perfil
          key={perfil.id}
          title={perfil.title}
          image={perfil.image}
          infos={perfil.infos}
          description={perfil.description}
          onClick={() => onProductClick(perfil)}
        />
      ))}
    </List>
  </SectionContainer>
)

export default PerfilList
