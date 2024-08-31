import Perfil from '../ProductPerfil'
import ProdutoPerfil from '../../models/ProdutoPerfil'
import { List, SectionContainer } from '../ProductList/styles'

export type PerfilProps = {
  perfils: ProdutoPerfil[]
}

const PerfilList = ({ perfils }: PerfilProps) => (
  <SectionContainer>
    <List>
      {perfils.map((perfil) => (
        <Perfil
          key={perfil.id}
          title={perfil.title}
          image={perfil.image}
          infos={perfil.infos}
          description={perfil.description}
        />
      ))}
    </List>
  </SectionContainer>
)

export default PerfilList
