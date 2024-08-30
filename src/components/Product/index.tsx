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
  title: string
  category: string[]
  nota: number
  description: string
  infos: string
  image: string
}

const Product = ({
  title,
  category,
  nota,
  description,
  infos,
  image
}: Props) => (
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
    <Button type="link" to="/Saibamais" title="Saiba mais">
      {infos}
    </Button>
  </Card>
)

export default Product
