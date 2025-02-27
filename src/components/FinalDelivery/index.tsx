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
import { closeDeliveryEnd } from '../../store/reducers/cart'

const DeliveryEnd = () => {
  const { isOpenDeliveryEnd } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCartDeliveryEnd = () => {
    dispatch(closeDeliveryEnd())
  }
  return (
    <DeliContainer className={isOpenDeliveryEnd ? 'is-open' : ''}>
      <Overlay onClick={closeCartDeliveryEnd} />{' '}
      {/* Fecha o carrinho ao clicar no overlay */}
      <Sidebar>
        <h3>Pagamento - Valor a pagar R$ 200,00</h3>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome no cartão</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <NuCepContainer>
            <InputGroup>
              <label htmlFor="nucart">Número do cartão</label>
              <input id="nucart" type="text" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="nuseg">CVV</label>
              <input id="nuseg" type="text" />
            </InputGroup>
          </NuCepContainer>
          <NuCepContainer>
            <InputGroup>
              <label htmlFor="vectomonth">Mês de vencimento</label>
              <input id="vectomonth" type="text" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="vectoyear">Ano de vencimento</label>
              <input id="vectoyear" type="text" />
            </InputGroup>
          </NuCepContainer>
        </Row>
        <ButtonContainer>
          <div>
            <ButtonCart
              title="Clique aqui para finalizar o pagamento"
              type="button"
            >
              Finalizar pagamento
            </ButtonCart>
          </div>
          <div>
            <ButtonCart
              onClick={closeCartDeliveryEnd}
              title="Clique aqui para voltar para a edição de endereço "
              type="button"
            >
              Voltar para a edição de endereço
            </ButtonCart>
          </div>
        </ButtonContainer>
      </Sidebar>
    </DeliContainer>
  )
}

export default DeliveryEnd
