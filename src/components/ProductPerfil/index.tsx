import { Card, Descricao, EnLinha, Titulo } from './styles'
import ButtonPerfil from '../ButtonPerfil'
import { useNavigate } from 'react-router-dom'

type Props = {
  id: number
  title: string
  description: string
  image: string
  onClick?: () => void
}

const ProductPerfil = ({ id, title, description, image, onClick }: Props) => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    navigate(`/PerfilDetails/${id}`) // Navegação para a página de detalhes do perfil
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
        {/* Removendo o "to" já que a navegação é feita pelo "onClick" */}
        <ButtonPerfil
          title="Adicionar ao carrinho"
          onClick={handleAddToCart} // Navegação ao clicar no botão
        >
          Adicionar ao carrinho
        </ButtonPerfil>
      </div>
    </Card>
  )
}

export default ProductPerfil
