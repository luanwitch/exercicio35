import PerfilList from '../../components/PerfilList'
import marquerita from '../../assets/image/1-marguerita.png'
import { ButtonCantainer } from '../../components/Button/styles'
import fechar_modal from '../../assets/image/fechar-modal.png'
import { Modal, ModalContent } from './styles'
import { useState } from 'react'
import { Produto } from '../Home'

const cardapio: Produto[] = []

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
