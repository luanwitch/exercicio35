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
import { close, remove, openDelivery } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const cartDelivery = () => {
    dispatch(openDelivery())
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
                <Prices>
                  R${' '}
                  {item.preco.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2
                  })}
                </Prices>
              </div>
              <div>
                <ButtonClose
                  onClick={() => removeItem(item.id)}
                  type="button"
                />
              </div>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} item(s) no carrinho</Quantity>
        <AlinPrices>
          <PricesT>Valor total</PricesT>
          <PricesT>
            R${' '}
            {items
              .reduce((total, item) => total + item.preco, 0)
              .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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
              onClick={cartDelivery}
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
