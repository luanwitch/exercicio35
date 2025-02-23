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
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />{' '}
      {/* Fecha o carrinho ao clicar no overlay */}
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <Prices>R$ {item.preco.toFixed(2)}</Prices>
              </div>
              <div>
                <ButtonClose type="button" />
              </div>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} item(s) no carrinho</Quantity>
        <AlinPrices>
          <PricesT>Valor total</PricesT>
          <PricesT>
            R$ {items.reduce((total, item) => total + item.preco, 0).toFixed(2)}
          </PricesT>
        </AlinPrices>
        <ButtonContainer>
          <div>
            <ButtonCart
              onClick={closeCart}
              title="Clique aqui para continuar comprando"
              type="button"
            >
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
}

export default Cart
