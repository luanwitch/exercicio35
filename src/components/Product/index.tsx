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
import { Produto } from '../../pages/Home' // Importe o tipo Produto

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Produto) => (
  <Card>
    <div>
      <img src={capa} alt={titulo} />
    </div>
    <Categoria>
      {/* Renderiza a tag apenas se destacado for true */}
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </Categoria>
    <EnLinha>
      <Titulo>{titulo}</Titulo>
      <Nota>{avaliacao}</Nota>
      <Estrelinha src={Estrela} alt="estrela" />
    </EnLinha>
    <Descricao>{descricao}</Descricao>
    <Button type="link" to={`/Perfil/${id}`} title="Saiba mais">
      Saiba mais
    </Button>
  </Card>
)

export default Product
