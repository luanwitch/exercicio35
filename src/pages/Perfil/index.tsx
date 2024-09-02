import marquerita from '../../assets/image/1-marguerita.png'
import toscana from '../../assets/image/2-toscana.jpeg'
import calabresa from '../../assets/image/3-calabresa.jpg'
import fiorentina from '../../assets/image/4-fiorentina.jpg'
import portuguesa from '../../assets/image/5-portuguesa.png'
import morango_chocolate from '../../assets/image/6 - pizza-doce_morango_com_chocolate.jpg'
import PerfilList from '../../components/PerfilList'
import ProdutoPerfil from '../../models/ProdutoPerfil'

const cardapio: ProdutoPerfil[] = [
  {
    id: 7,
    title: 'Pizza Marguerita',
    image: marquerita,
    infos: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 8,
    title: 'Pizza Toscana',
    image: toscana,
    infos: 'Adicionar ao carrinho',
    description:
      'Pizza Toscana: calabresa picante, molho de tomate, cebola roxa e azeitonas pretas. Um toque de Itália em cada mordida!'
  },
  {
    id: 9,
    title: 'Pizza Calabresa',
    image: calabresa,
    infos: 'Adicionar ao carrinho',
    description:
      'Calabresa suculenta: molho de tomate, fatias generosas de calabresa, cebola caramelizada e uma pitada de orégano. Um clássico irresistível!'
  },
  {
    id: 10,
    title: 'Pizza Fiorentina',
    image: fiorentina,
    infos: 'Adicionar ao carrinho',
    description:
      'Pizza Fiorentina: espinafre fresco, ovos cozidos, queijo parmesão ralado e molho de tomate. Um sabor sofisticado e único! para você saborear'
  },
  {
    id: 11,
    title: 'Pizza Portuguesa',
    image: portuguesa,
    infos: 'Adicionar ao carrinho',
    description:
      'Pizza Portuguesa: molho de tomate, presunto, ovos, cebola, pimentão e azeitonas. Uma combinação tradicional e saborosa!'
  },
  {
    id: 12,
    title: 'Pizza Morango com Chocolate',
    image: morango_chocolate,
    infos: 'Adicionar ao carrinho',
    description:
      'Pizza Doce de Morango com Chocolate: morangos frescos, creme de chocolate e um toque de chantilly. A sobremesa perfeita!'
  }
]
const Perfil = () => (
  <>
    <PerfilList perfils={cardapio} />
  </>
)

export default Perfil
