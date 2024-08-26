import Tag from '../Tag'
import {
  AlinhaTag,
  Card,
  Descricao,
  EnLinha,
  Estrelinha,
  Nota,
  Titulo
} from './styles'
import Hihioki_sushi from '../../assets/image/hioki_sushi.png'
import Estrela from '../../assets/image/estrela.png'

const Product = () => (
  <Card>
    <div>
      <img src={Hihioki_sushi} alt="foto" />
    </div>
    <EnLinha>
      <Titulo>Hioki Sushi</Titulo>
      <Nota>4.9</Nota>
      <Estrelinha src={Estrela} alt="estrela" />
    </EnLinha>
    <AlinhaTag>
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
    </AlinhaTag>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <Tag>Saiba mais</Tag>
  </Card>
)

export default Product
