import {
  AlinPrices,
  ButtonCart,
  ButtonClose,
  ButtonContainer,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  PricesT,
  Quantity,
  Sidebar
} from './styles'
import pizza from '../../assets/image/1-marguerita.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} alt="pizza" />
          <div>
            <h3>Nome do prato</h3>
            <Prices>R$ 60,00</Prices>
          </div>
          <div>
            <ButtonClose type="button" />
          </div>
        </CartItem>
        <CartItem>
          <img src={pizza} alt="pizza" />
          <div>
            <h3>Nome do prato</h3>
            <Prices>R$ 60,00</Prices>
          </div>
          <div>
            <ButtonClose type="button" />
          </div>
        </CartItem>
        <CartItem>
          <img src={pizza} alt="pizza" />
          <div>
            <h3>Nome do prato</h3>
            <Prices>R$ 60,00</Prices>
          </div>
          <div>
            <ButtonClose type="button" />
          </div>
        </CartItem>
      </ul>
      <Quantity>2 item(s) no carrinho</Quantity>
      <AlinPrices>
        <PricesT>Valor total</PricesT>
        <PricesT>R$ 200,00</PricesT>
      </AlinPrices>
      <ButtonContainer>
        <div>
          <ButtonCart title="Clique aqui para continua a comprar" type="button">
            Continuar comprando
          </ButtonCart>
        </div>
        <div>
          <ButtonCart
            title="Clique aqui para continuar com a entrega"
            type="button"
          >
            Continuar com a entrega
          </ButtonCart>
        </div>
      </ButtonContainer>
    </Sidebar>
  </CartContainer>
)

export default Cart
