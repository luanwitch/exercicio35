import { Card, Descricao, EnLinha, Titulo } from './styles'

import ButtonPerfil from '../ButtonPerfil'

type Props = {
  title: string
  description: string
  infos: string
  image: string
}

const ProductPerfil = ({ title, description, infos, image }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
    </div>
    <EnLinha>
      <Titulo>{title}</Titulo>
    </EnLinha>

    <Descricao>{description}</Descricao>
    <ButtonPerfil title="Adicionar ao carrinho">{infos}</ButtonPerfil>
  </Card>
)

export default ProductPerfil
