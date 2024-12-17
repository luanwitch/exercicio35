import { Produto } from '../../pages/Home'
import Product from '../Product'
import { List, SectionContainer } from './styles'

export type Props = {
  produtos: Produto[]
}

const ProductsList = ({ produtos }: Props) => (
  <SectionContainer>
    <List>
      {produtos.map((produto) => (
        <Product
          key={produto.id}
          id={produto.id}
          title={produto.titulo}
          category={[produto.tipo]}
          image={produto.capa}
          nota={produto.avaliacao}
          description={produto.descricao}
        />
      ))}
    </List>
  </SectionContainer>
)

export default ProductsList
