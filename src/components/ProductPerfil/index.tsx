import { Card, Descricao, EnLinha, Titulo } from './styles'
import ButtonPerfil from '../ButtonPerfil'
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string
  description: string
  infos: string
  image: string
  onClick: () => void
}

const ProductPerfil = ({
  title,
  description,
  infos,
  image,
  onClick
}: Props) => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    navigate('/perfildetails') // Ajuste a rota conforme necessário
    onClick()
  }

  return (
    <Card>
      <div>
        <img src={image} alt={title} />
      </div>
      <EnLinha>
        <Titulo>{title}</Titulo>
      </EnLinha>
      <Descricao>{description}</Descricao>
      <div style={{ padding: '10px' }}>
        <ButtonPerfil title="Adicionar ao carrinho" onClick={handleAddToCart}>
          {infos}
        </ButtonPerfil>
      </div>
    </Card>
  )
}

export default ProductPerfil
