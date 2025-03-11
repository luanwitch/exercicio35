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
  close,
  clearItems
} from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useEffect } from 'react'

const FinalDelivery = () => {
  const { isOpenDeliveryEnd, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  // Monitorar a resposta da API de compra
  useEffect(() => {
    if (data) {
      console.log('Compra realizada com sucesso:', data)
      // Limpar os itens do carrinho após compra bem-sucedida
      dispatch(clearItems())
    }
  }, [data, dispatch])

  // Monitorar quando o carrinho fica vazio para abrir o ProjectFinal
  useEffect(() => {
    if (items.length === 0) {
      dispatch(close()) // Fecha o Cart
      dispatch(closeDelivery()) // Fecha o Delivery
      dispatch(closeDeliveryEnd()) // Fecha o FinalDelivery
      dispatch(openFinalProject()) // Abre o ProjectFinal
    }
  }, [items, dispatch])

  const closeCartDeliveryEnd = () => {
    dispatch(closeDeliveryEnd()) // Fecha o FinalDelivery
  }

  const form = useFormik({
    initialValues: {
      cardFullName: '',
      cardNumber: '',
      segNumber: '',
      vectoMonth: '',
      vectoYear: ''
    },
    validationSchema: Yup.object({
      cardFullName: Yup.string().required('preenchimento obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'minimo 19 caracteres')
        .max(19, 'máximo 19 caracteres')
        .required('preenchimento obrigatório'),
      segNumber: Yup.string()
        .min(3, 'minimo 3 caracteres')
        .max(3, 'máximo 3 caracteres')
        .required('preenchimento obrigatório'),
      vectoMonth: Yup.string()
        .min(2, 'minimo 2 caracteres')
        .max(2, 'máximo 2 caracteres')
        .required('preenchimento obrigatório'),
      vectoYear: Yup.string()
        .min(4, 'minimo 4 caracteres')
        .max(4, 'máximo 4 caracteres')
        .required('preenchimento obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        // Obtém os valores do pagamento
        const payment = {
          card: {
            name: values.cardFullName,
            number: values.cardNumber,
            code: Number(values.segNumber),
            expires: {
              month: Number(values.vectoMonth),
              year: Number(values.vectoYear)
            }
          }
        }

        // Obtém os valores de entrega
        const delivery = {
          receiver: 'Nome do Recebedor', // Exemplo, você precisa pegar os valores do formulário anterior
          address: {
            description: 'Endereço completo',
            city: 'Cidade',
            zipCode: 'CEP',
            number: 123,
            complement: 'Complemento'
          }
        }

        // Chama a API para realizar a compra
        const response = await purchase({
          products: [
            {
              id: 1,
              price: 0
            }
          ],
          delivery,
          payment
        }).unwrap()

        console.log('Resposta da API:', response) // Verifique a resposta da API
      } catch (error) {
        console.error('Erro na API:', error) // Verifique o erro
      }
    }
  })

  const getErrorMessage = (fildName: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors

    const hasError =
      (isTouched && isInvalid) || (form.submitCount > 0 && isInvalid)
    return hasError
  }

  // Função para abrir a página final do projeto
  const openFinalProjectPage = () => {
    // Marca todos os campos como tocados para exibir os erros
    const touchedFields = Object.keys(form.values).reduce((acc, field) => {
      acc[field] = true
      return acc
    }, {} as Record<string, boolean>)

    form.setTouched(touchedFields)

    // Valida o formulário manualmente
    form.validateForm().then((errors) => {
      // Se não houver erros, submete o formulário e abre o ProjectFinal
      if (Object.keys(errors).length === 0) {
        form.handleSubmit()

        // Se preferir não esperar pela resposta da API, você pode navegar diretamente
        // O clearItems será chamado quando a API responder com sucesso através do useEffect
        dispatch(openFinalProject())
        dispatch(closeDeliveryEnd())
        dispatch(closeDelivery())
        dispatch(close())
      }
    })
  }

  return (
    <DeliContainer className={isOpenDeliveryEnd ? 'is-open' : ''}>
      <Overlay onClick={closeCartDeliveryEnd} />
      <Sidebar>
        <h3>Pagamento - Valor a pagar R$ 200,00</h3>
        <form onSubmit={form.handleSubmit}>
          <Row>
            <InputGroup maxWidth="326px">
              <label htmlFor="cardFullName">Nome no cartão</label>
              <input
                id="cardFullName"
                type="text"
                name="cardFullName"
                value={form.values.cardFullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={getErrorMessage('cardFullName') ? 'error' : ''}
              />
            </InputGroup>

            <CartContainer>
              <InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getErrorMessage('cardNumber') ? 'error' : ''}
                />
              </InputGroup>

              <InputGroup maxWidth="88px">
                <label htmlFor="segNumber">CVV</label>
                <input
                  id="segNumber"
                  type="text"
                  name="segNumber"
                  value={form.values.segNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getErrorMessage('segNumber') ? 'error' : ''}
                />
              </InputGroup>
            </CartContainer>

            <CartContainer>
              <InputGroup maxWidth="155px">
                <label htmlFor="vectoMonth">Mês de vencimento</label>
                <input
                  id="vectoMonth"
                  type="text"
                  name="vectoMonth"
                  value={form.values.vectoMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getErrorMessage('vectoMonth') ? 'error' : ''}
                />
              </InputGroup>

              <InputGroup maxWidth="155px">
                <label htmlFor="vectoYear">Ano de vencimento</label>
                <input
                  id="vectoYear"
                  type="text"
                  name="vectoYear"
                  value={form.values.vectoYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={getErrorMessage('vectoYear') ? 'error' : ''}
                />
              </InputGroup>
            </CartContainer>
          </Row>

          <ButtonContainer>
            <div>
              <ButtonCart
                onClick={openFinalProjectPage} // Chama a função de envio
                title="Clique aqui para finalizar o pagamento"
                type="button"
              >
                Finalizar pagamento
              </ButtonCart>
            </div>
            <div>
              <ButtonCart
                onClick={closeCartDeliveryEnd}
                title="Clique aqui para voltar para a edição de endereço"
                type="button"
              >
                Voltar para a edição de endereço
              </ButtonCart>
            </div>
          </ButtonContainer>
        </form>
      </Sidebar>
    </DeliContainer>
  )
}

export default FinalDelivery
