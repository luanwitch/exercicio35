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

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clearItems, closeFinalProject } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { useState, useEffect } from 'react'

// Definir o tipo para o payload da API de compra
type PurchasePayload = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  products: Array<{
    id: number
    price: number
  }>
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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

  const [orderDetails, setOrderDetails] = useState<{
    orderId: string | null
    delivery: {
      receiver: string
      address: {
        description: string
        city: string
        zipCode: string
        number: number
        complement: string
      }
    } | null
  } | null>(null)

  // Este efeito é executado quando o componente monta e os dados estão disponíveis
  useEffect(() => {
    if (data && data.orderId) {
      setOrderId(data.orderId)
      setOrderDetails({
        orderId: data.orderId,
        delivery: data.delivery || null
      })
      setOrderPlaced(true)
      dispatch(clearItems())
    }
  }, [data, dispatch])

  // Função para enviar o pedido
  const handleSubmit = async () => {
    if (orderPlaced) {
      // Pedido já foi realizado, apenas feche a janela
      closeFinalProjectPage()
      return
    }

    // Verifica se temos dados de entrega
    if (!deliveryData) {
      console.error('Dados de entrega ausentes')
      return
    }

    // Formatando os dados para a API
    const formData: PurchasePayload = {
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
      // Use os produtos do estado ou crie a partir dos itens
      products:
        products.length > 0
          ? products
          : items.map((item) => ({
              id: item.id,
              price: item.preco
            })),
      // Use os dados de pagamento do estado ou o padrão
      payment: paymentData || {
        card: {
          name: 'Teste',
          number: '1111222233334444',
          code: 123,
          expires: {
            month: 12,
            year: 2030
          }
        }
      }
    }

    try {
      // Chame a mutação de compra
      const result = await purchase(formData).unwrap()
      console.log('Compra realizada com sucesso:', result)

      // Armazene o ID do pedido e os detalhes
      if (result && result.orderId) {
        setOrderId(result.orderId)
        setOrderDetails({
          orderId: result.orderId,
          delivery: result.delivery || formData.delivery
        })
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
          Pedido realizado -{' '}
          <Content>{orderId || 'Aguardando confirmação'}</Content>
        </h3>

        {/* Mostrar detalhes de entrega se disponíveis */}
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
