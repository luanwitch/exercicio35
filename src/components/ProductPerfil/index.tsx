import { Card, Descricao, EnLinha, Titulo } from './styles'
import ButtonPerfil from '../ButtonPerfil'
import { useNavigate } from 'react-router-dom'

type Props = {
  restauranteId: number
  id: number
  title: string
  description: string
  image: string
  onClick?: () => void
  botaoLabel?: string
}

const ProductPerfil = ({
  restauranteId,
  id,
  title,
  description,
  image,
  onClick,
  botaoLabel
}: Props) => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    // Navega para a página de detalhes do restaurante com o ID do prato como parâmetro
    navigate(`/PerfilDetails/${restauranteId}?prato=${id}`)
    if (onClick) {
      onClick()
    }
  }

  return (
    <Card>
      <div>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <EnLinha>
        <Titulo>{title}</Titulo>
      </EnLinha>
      <Descricao>{description}</Descricao>
      <div style={{ padding: '10px' }}>
        <ButtonPerfil
          title={botaoLabel || 'Adicionar ao carrinho'}
          onClick={handleAddToCart}
        >
          {botaoLabel || 'Adicionar ao carrinho'}
        </ButtonPerfil>
      </div>
    </Card>
  )
}

export default ProductPerfil
