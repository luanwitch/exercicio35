import {
  ButtonCart,
  ButtonContainer,
  DeliContainer,
  InputGroup,
  Overlay,
  Row,
  Sidebar,
  CartContainer
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  closeDeliveryEnd,
  openFinalProject,
  closeDelivery,
  close // Importando close para fechar o Cart também
} from '../../store/reducers/cart'

const FinalDelivery = () => {
  const { isOpenDeliveryEnd } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCartDeliveryEnd = () => {
    dispatch(closeDeliveryEnd()) // Fecha o FinalDelivery
  }
  const openFinalProjectPage = () => {
    // Fechar todos os outros componentes e abrir apenas o ProjectFinal
    dispatch(close()) // Fecha o Cart
    dispatch(closeDelivery()) // Fecha o Delivery
    dispatch(closeDeliveryEnd()) // Fecha o FinalDelivery

    // Como último passo, abrir o ProjectFinal
    dispatch(openFinalProject()) // Abre o ProjectFinal
  }

  return (
    <DeliContainer className={isOpenDeliveryEnd ? 'is-open' : ''}>
      <Overlay onClick={closeCartDeliveryEnd} />{' '}
      {/* Fecha o FinalDelivery ao clicar no overlay */}
      <Sidebar>
        <h3>Pagamento - Valor a pagar R$ 200,00</h3>
        <Row>
          <InputGroup maxWidth="326px">
            <label htmlFor="fullName">Nome no cartão</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <CartContainer>
            <InputGroup maxWidth="228px">
              <label htmlFor="nucart">Número do cartão</label>
              <input id="nucart" type="text" />
            </InputGroup>

            <InputGroup maxWidth="88px">
              <label htmlFor="nuseg">CVV</label>
              <input id="nuseg" type="text" />
            </InputGroup>
          </CartContainer>
          <CartContainer>
            <InputGroup maxWidth="155px">
              <label htmlFor="vectomonth">Mês de vencimento</label>
              <input id="vectomonth" type="text" />
            </InputGroup>

            <InputGroup maxWidth="155px">
              <label htmlFor="vectoyear">Ano de vencimento</label>
              <input id="vectoyear" type="text" />
            </InputGroup>
          </CartContainer>
        </Row>
        <ButtonContainer>
          <div>
            <ButtonCart
              onClick={openFinalProjectPage} // Método modificado para garantir o fluxo correto
              title="Clique aqui para finalizar o pagamento"
              type="button"
            >
              Finalizar pagamento
            </ButtonCart>
          </div>
          <div>
            <ButtonCart
              onClick={closeCartDeliveryEnd} // Fecha o FinalDelivery e volta ao Delivery
              title="Clique aqui para voltar para a edição de endereço"
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

export default FinalDelivery
