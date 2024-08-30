import Product from '../Product'
import { List, SectionContainer } from './styles'
import Produto from '../../models/Produto'

export type Props = {
  produtos: Produto[]
}

const ProductsList = ({ produtos }: Props) => (
  <SectionContainer>
    <List>
      {produtos.map((produto) => (
        <Product
          key={produto.id}
          title={produto.title}
          category={produto.category}
          image={produto.image}
          infos={produto.infos}
          nota={produto.nota}
          description={produto.description}
        />
      ))}
    </List>
  </SectionContainer>
)

export default ProductsList
