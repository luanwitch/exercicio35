import {
  Card,
  Category,
  Description,
  OnLine,
  Score,
  Star,
  Title
} from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { Produto } from '../../pages/Home' // Importe o tipo Produto

import Estrela from '../../assets/image/estrela.png'

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
    <Category>
      {/* Renderiza a tag apenas se destacado for true */}
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </Category>
    <OnLine>
      <Title>{titulo}</Title>
      <Score>{avaliacao}</Score>
      <Star src={Estrela} alt="estrela" />
    </OnLine>
    <Description>{descricao}</Description>
    <Button
      type="link"
      to={`/Perfil/${id}`}
      title="Clique aqui para saber mais sobre os produtos"
    >
      Saiba mais
    </Button>
  </Card>
)

export default Product
