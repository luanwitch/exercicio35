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
      'Comece o seu dia com o melhor do café da manhã! Delicie-se com uma seleção de pães fresquinhos, croissants amanteigados, e uma variedade de queijos e presuntos. Acompanhado de frutas suculentas, granola crocante e iogurte cremoso. Experimente nossa combinação de café fresco e sucos naturais para uma refeição completa e energizante. O café da manhã perfeito para dar início ao seu dia com sabor e vitalidade!'
  },
  {
    id: 9,
    title: 'Pizza Calabreza',
    image: calabresa,
    infos: 'Adicionar ao carrinho',
    description:
      'Experimente nossos deliciosos burritos recheados com ingredientes frescos e saborosos! Tortillas macias, carnes temperadas e vegetais crocantes, acompanhados por molhos irresistíveis. Entrega rápida, embalagens práticas e qualidade garantida. Desfrute do sabor autêntico do México no conforto da sua casa, com nosso serviço de delivery!'
  },
  {
    id: 10,
    title: 'Pizza Fiorentina',
    image: fiorentina,
    infos: 'Adicionar ao carrinho',
    description:
      'Delicie-se com os melhores lanches, feitos com ingredientes frescos e de alta qualidade! Sanduíches crocantes, hambúrgueres suculentos e acompanhamentos irresistíveis. Entrega rápida, embalagens práticas e sabor garantido. Aproveite o conforto do seu lar e peça agora mesmo o melhor da nossa lanchonete, com sabor e qualidade que você merece!'
  },
  {
    id: 11,
    title: 'Pizza Portuguesa',
    image: portuguesa,
    infos: 'Adicionar ao carrinho',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 12,
    title: 'Pizza Morango com chocolate',
    image: morango_chocolate,
    infos: 'Adicionar ao carrinho',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  }
]

const Perfil = () => (
  <>
    <PerfilList perfils={cardapio} />
  </>
)

export default Perfil
