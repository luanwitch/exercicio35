import ProductsList from '../../components/ProductList'
import hioki_sushi from '../../assets/image/hioki_sushi.png'
import lanches from '../../assets/image/lanches.jpeg'
import burritos from '../../assets/image/burritos.jpeg'
import cafe_da_manha from '../../assets/image/café-da-manha.jpeg'
import pizzas from '../../assets/image/pizzas.jpeg'
import massas from '../../assets/image/massas.png'
import Produto from '../../models/Produto'

const cardapio: Produto[] = [
  {
    id: 1,
    title: 'Rodízio de pizzas',
    category: ['Destaque da semana', 'Italiana'],
    image: pizzas,
    infos: 'Saiba mais',
    nota: 9.9,
    description:
      'Experimente o melhor do rodízio de pizzas no conforto da sua casa! Com uma variedade incrível de sabores, desde clássicas até criações exclusivas, você vai se deliciar com cada fatia. Nossas pizzas são preparadas com ingredientes frescos e de alta qualidade, garantindo uma experiência saborosa e satisfatória. Aproveite esta novidade para delivery e tenha a autêntica experiência de um rodízio sem sair do lar!'
  },
  {
    id: 2,
    title: 'Café da manhã',
    category: ['Americana'],
    image: cafe_da_manha,
    infos: 'Saiba mais',
    nota: 8.9,
    description:
      'Comece o seu dia com o melhor do café da manhã! Delicie-se com uma seleção de pães fresquinhos, croissants amanteigados, e uma variedade de queijos e presuntos. Acompanhado de frutas suculentas, granola crocante e iogurte cremoso. Experimente nossa combinação de café fresco e sucos naturais para uma refeição completa e energizante. O café da manhã perfeito para dar início ao seu dia com sabor e vitalidade!'
  },
  {
    id: 3,
    title: 'Burritos',
    category: ['Mexicana'],
    image: burritos,
    infos: 'Saiba mais',
    nota: 8.8,
    description:
      'Experimente nossos deliciosos burritos recheados com ingredientes frescos e saborosos! Tortillas macias, carnes temperadas e vegetais crocantes, acompanhados por molhos irresistíveis. Entrega rápida, embalagens práticas e qualidade garantida. Desfrute do sabor autêntico do México no conforto da sua casa, com nosso serviço de delivery!'
  },
  {
    id: 4,
    title: 'Lanches',
    category: ['Americana'],
    image: lanches,
    infos: 'Saiba mais',
    nota: 7.7,
    description:
      'Delicie-se com os melhores lanches, feitos com ingredientes frescos e de alta qualidade! Sanduíches crocantes, hambúrgueres suculentos e acompanhamentos irresistíveis. Entrega rápida, embalagens práticas e sabor garantido. Aproveite o conforto do seu lar e peça agora mesmo o melhor da nossa lanchonete, com sabor e qualidade que você merece!'
  },
  {
    id: 5,
    title: 'La doce vita',
    category: ['Italiana'],
    image: massas,
    infos: 'Saiba mais',
    nota: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    title: 'Hioki sushi',
    category: ['Japonesa'],
    image: hioki_sushi,
    infos: 'Saiba mais',
    nota: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  }
]

const Home = () => (
  <>
    <ProductsList produtos={cardapio} />
  </>
)

export default Home
