import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import {
  ButtonCart,
  ButtonContainer,
  FaseEnd,
  TextEnd,
  Sidebar,
  Overlay,
  Completed,
  Content
} from './styles'

import { RootReducer } from '../../store'
import { clearItems, closeFinalProject } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

const ProjectFinal = () => {
  const { isFinalProjectOpen, deliveryData, products, paymentData, items } =
    useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeFinalProjectPage = () => {
    dispatch(closeFinalProject())
  }

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    if (data && data.orderId) {
      setOrderId(data.orderId)
      setOrderPlaced(true)
      dispatch(clearItems())
    }
  }, [data, dispatch])

  const handleSubmit = async () => {
    if (orderPlaced) {
      closeFinalProjectPage()
      return
    }

    if (!deliveryData) {
      console.error('Dados de entrega ausentes')
      return
    }

    const formData = {
      delivery: {
        receiver: deliveryData.fullName,
        address: {
          description: deliveryData.end,
          city: deliveryData.city,
          zipCode: deliveryData.cep,
          number: Number(deliveryData.numero),
          complement: deliveryData.complement || 'N/A'
        }
      },
      products:
        products.length > 0
          ? products
          : items.map((item) => ({
              id: item.id,
              price: item.preco
            })),
      payment: paymentData
    }

    try {
      const result = await purchase(formData).unwrap()
      if (result && result.orderId) {
        setOrderId(result.orderId)
        setOrderPlaced(true)
      }
    } catch (error) {
      console.error('Erro ao processar o pedido:', error)
    }
  }

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (isError) {
    return <div>Erro ao processar o pedido</div>
  }

  return (
    <FaseEnd className={isFinalProjectOpen ? 'is-open' : ''}>
      <Overlay onClick={closeFinalProjectPage} />
      <Sidebar>
        <h3>
          Pedido realizado - <br />
          <br />
          <Content>{orderId || 'AGUARDANDO CONFIRMAÇÃO'}</Content>
          <br />
          <br />
          <Content>Ganhou frete grátis</Content>
        </h3>

        {deliveryData && (
          <div>
            <h4>Detalhes da Entrega:</h4>
            <ul>
              <li>
                <Completed>Nome do Recebedor:</Completed>{' '}
                <Content>{deliveryData.fullName}</Content>
              </li>
              <li>
                <Completed>Endereço:</Completed>{' '}
                <Content>{deliveryData.end}</Content>
              </li>
              <li>
                <Completed>Cidade:</Completed>{' '}
                <Content>{deliveryData.city}</Content>
              </li>
              <li>
                <Completed>CEP:</Completed>{' '}
                <Content>{deliveryData.cep}</Content>
              </li>
              <li>
                <Completed>Número:</Completed>{' '}
                <Content>{deliveryData.numero}</Content>
              </li>
              <li>
                <Completed>Complemento:</Completed>{' '}
                <Content>{deliveryData.complement || 'N/A'}</Content>
              </li>
            </ul>
          </div>
        )}

        <div>
          <TextEnd>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </TextEnd>
          <TextEnd>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </TextEnd>
          <TextEnd>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </TextEnd>
          <TextEnd>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </TextEnd>
        </div>

        <ButtonContainer>
          <div>
            <ButtonCart
              onClick={handleSubmit}
              title={orderPlaced ? 'Fechar' : 'Clique aqui para concluir'}
              type="button"
            >
              {orderPlaced
                ? 'Obrigado !! clique aqui para encerrar'
                : 'Concluir'}
            </ButtonCart>
          </div>
        </ButtonContainer>
      </Sidebar>
    </FaseEnd>
  )
}

export default ProjectFinal
