import { Card, Descricao, EnLinha, Titulo } from './styles'
import ButtonPerfil from '../ButtonPerfil'
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const ProductPerfil = ({ title, description, image, onClick }: Props) => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    navigate('/perfildetails') // Ajuste a rota conforme necessário
    onClick()
  }

  return (
    <Card>
      <div>
        {/* Renderizando a imagem */}
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <EnLinha>
        <Titulo>{title}</Titulo>
      </EnLinha>
      {/* Descrição do produto */}
      <Descricao>{description}</Descricao>
      <div style={{ padding: '10px' }}>
        {/* Botão */}
        <ButtonPerfil title="Adicionar ao carrinho" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </ButtonPerfil>
      </div>
    </Card>
  )
}

export default ProductPerfil
