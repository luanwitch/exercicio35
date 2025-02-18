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
}

const ProductPerfil = ({
  restauranteId,
  title,
  description,
  image,
  onClick
}: Props) => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    navigate(`/PerfilDetails/${restauranteId}`)
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
        <ButtonPerfil title="Adicionar ao carrinho" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </ButtonPerfil>
      </div>
    </Card>
  )
}

export default ProductPerfil
