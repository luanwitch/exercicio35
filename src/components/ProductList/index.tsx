import Product from '../Product'
import { List, SectionContainer } from './styles'

const ProductsList = () => (
  <div className="container">
    <SectionContainer>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </SectionContainer>
  </div>
)

export default ProductsList
