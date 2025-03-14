import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { PacmanLoader } from 'react-spinners'
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
import { RootReducer } from '../../store'
import { close, remove, openDelivery } from '../../store/reducers/cart'
import { cores } from '../../styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    setIsLoading(true)
    dispatch(remove(id))

    // Define o tempo de 3 segundos para o loader
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const cartDelivery = () => {
    setIsLoading(true)
    dispatch(openDelivery())

    // Define o tempo de 3 segundos para o loader
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  // Efeito para mostrar o loader quando o carrinho é aberto
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <PacmanLoader color={cores.corClara} />
          </div>
        ) : items.length > 0 ? (
          <>
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
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um item para continuar
            com a compra.
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
