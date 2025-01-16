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
        <Product key={produto.id} {...produto} />
      ))}
    </List>
  </SectionContainer>
)

export default ProductsList
