import {
  ButtonCart,
  ButtonContainer,
  DeliContainer,
  InputGroup,
  NuCepContainer,
  Overlay,
  Row,
  Sidebar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeDelivery, openDeliveryEnd } from '../../store/reducers/cart'

const Delivery = () => {
  const { isOpenDelivery } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCartDelivery = () => {
    dispatch(closeDelivery()) // Fecha o Delivery
  }

  const openCartDeliveryEnd = () => {
    dispatch(openDeliveryEnd()) // Abre o FinalDelivery
  }

  return (
    <DeliContainer className={isOpenDelivery ? 'is-open' : ''}>
      <Overlay onClick={closeCartDelivery} />{' '}
      {/* Fecha o Delivery ao clicar no overlay */}
      <Sidebar>
        <h3>Entrega</h3>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="end">Endereço</label>
            <input id="end" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" />
          </InputGroup>
          <NuCepContainer>
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input id="cep" type="text" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="numero">Número</label>
              <input id="numero" type="text" />
            </InputGroup>
          </NuCepContainer>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input id="complement" type="text" />
          </InputGroup>
        </Row>
        <ButtonContainer>
          <div>
            <ButtonCart
              onClick={openCartDeliveryEnd} // Abre o FinalDelivery
              title="Clique aqui para continuar com o pagamento"
              type="button"
            >
              Continuar com o pagamento
            </ButtonCart>
          </div>
          <div>
            <ButtonCart
              onClick={closeCartDelivery} // Fecha o Delivery
              title="Clique aqui para voltar ao carrinho"
              type="button"
            >
              Voltar ao carrinho
            </ButtonCart>
          </div>
        </ButtonContainer>
      </Sidebar>
    </DeliContainer>
  )
}

export default Delivery
