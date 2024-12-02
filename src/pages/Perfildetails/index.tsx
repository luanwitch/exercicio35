import PerfilList from '../../components/PerfilList'
import ProdutoPerfil from '../../models/ProdutoPerfil'
import marquerita from '../../assets/image/1-marguerita.png'
import toscana from '../../assets/image/2-toscana.jpeg'
import calabresa from '../../assets/image/3-calabresa.jpg'
import fiorentina from '../../assets/image/4-fiorentina.jpg'
import portuguesa from '../../assets/image/5-portuguesa.png'
import morango_chocolate from '../../assets/image/6 - pizza-doce_morango_com_chocolate.jpg'
import { ButtonCantainer } from '../../components/Button/styles'
import fechar_modal from '../../assets/image/fechar-modal.png'
import { Modal, ModalContent } from './styles'
import { useState } from 'react'

const cardapio: ProdutoPerfil[] = [
  {
    id: 7,
    title: 'Pizza Marguerita',
    image: marquerita,
    infos: 'Mais detalhes',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 8,
    title: 'Pizza Toscana',
    image: toscana,
    infos: 'Mais detalhes',
    description:
      'Pizza Toscana: calabresa picante, molho de tomate, cebola roxa e azeitonas pretas. Um toque de Itália em cada mordida!'
  },
  {
    id: 9,
    title: 'Pizza Calabresa',
    image: calabresa,
    infos: 'Mais detalhes',
    description:
      'Calabresa suculenta: molho de tomate, fatias generosas de calabresa, cebola caramelizada e uma pitada de orégano. Um clássico irresistível!'
  },
  {
    id: 10,
    title: 'Pizza Fiorentina',
    image: fiorentina,
    infos: 'Mais detalhes',
    description:
      'Pizza Fiorentina: espinafre fresco, ovos cozidos, queijo parmesão ralado e molho de tomate. Um sabor sofisticado e único! para você saborear'
  },
  {
    id: 11,
    title: 'Pizza Portuguesa',
    image: portuguesa,
    infos: 'Mais detalhes',
    description:
      'Pizza Portuguesa: molho de tomate, presunto, ovos, cebola, pimentão e azeitonas. Uma combinação tradicional e saborosa!'
  },
  {
    id: 12,
    title: 'Pizza Morango com Chocolate',
    image: morango_chocolate,
    infos: 'Mais detalhes',
    description:
      'Pizza Doce de Morango com Chocolate: morangos frescos, creme de chocolate e um toque de chantilly. A sobremesa perfeita!'
  }
]

const PerfilDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <PerfilList perfils={cardapio} onProductClick={openModal} />
      <Modal className={modalIsOpen ? 'visivel' : ''} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <header>
            <img src={fechar_modal} alt="icône fechar" onClick={closeModal} />
          </header>
          <img src={marquerita} alt="Pizza Marguerita" />
          <div>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <ButtonCantainer>Adicionar ao carrinho - R$ 60,90</ButtonCantainer>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PerfilDetails
