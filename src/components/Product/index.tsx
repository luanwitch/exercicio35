import Tag from '../Tag'
import {
  Card,
  Categoria,
  Descricao,
  EnLinha,
  Estrelinha,
  Nota,
  Titulo
} from './styles'
import Estrela from '../../assets/image/estrela.png'
import Button from '../Button'

type Props = {
  id: number
  title: string
  category: string[]
  nota: number
  description: string
  image: string
}

const Product = ({ id, title, category, nota, description, image }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
    </div>
    <Categoria>
      {category.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Categoria>
    <EnLinha>
      <Titulo>{title}</Titulo>
      <Nota>{nota}</Nota>
      <Estrelinha src={Estrela} alt="estrela" />
    </EnLinha>

    <Descricao>{description}</Descricao>
    <Button type="link" to={`/Perfil/${id}`} title="Saiba mais">
      Saiba mais
    </Button>
  </Card>
)

export default Product
