import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PerfilList from '../../components/PerfilList'
import { ButtonCantainer } from '../../components/Button/styles'
import fechar_modal from '../../assets/image/fechar-modal.png'
import { Modal, ModalContent } from './styles'
import { Produto } from '../Home'

const PerfilDetails = () => {
  const { id } = useParams()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cardapio, setCardapio] = useState<Produto[]>([]) // Apenas o cardápio carregado pelo restaurante
  const [selectedItem, setSelectedItem] = useState<
    Produto['cardapio'][0] | null
  >(null) // Item do modal
  const listRef = useRef<HTMLDivElement | null>(null)

  // Busca os dados do restaurante com base no ID da rota
  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setCardapio([res]) // Armazena os dados do restaurante no estado
        })
        .catch((err) => console.error('Erro ao buscar os dados:', err))
    }
  }, [id])

  // Rola a tela até o topo da lista quando o modal é aberto
  useEffect(() => {
    if (modalIsOpen && listRef.current) {
      window.scrollTo({
        top: listRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }, [modalIsOpen])

  // Abre o modal com o item selecionado
  const openModal = (item: Produto['cardapio'][0]) => {
    setSelectedItem(item) // Define o prato selecionado
    setModalIsOpen(true) // Abre o modal
  }

  // Fecha o modal
  const closeModal = () => {
    setModalIsOpen(false) // Fecha o modal
    setSelectedItem(null) // Remove o item selecionado
  }

  return (
    <>
      <div ref={listRef}>
        <PerfilList
          perfils={cardapio} // Passa os dados do restaurante e pratos
          onProductClick={(_, item) => openModal(item)} // Abre o modal com o prato selecionado
        />
      </div>
      <Modal className={modalIsOpen ? 'visivel' : ''} onClick={closeModal}>
        <ModalContent
          onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
        >
          <header>
            <img src={fechar_modal} alt="Ícone fechar" onClick={closeModal} />
          </header>
          {selectedItem ? (
            <>
              <img src={selectedItem.foto} alt={selectedItem.nome} />
              <div>
                <h4>{selectedItem.nome}</h4>
                <p>{selectedItem.descricao}</p>
                <p>Porção: {selectedItem.porcao}</p>
                <ButtonCantainer>
                  Adicionar ao carrinho - R$ {selectedItem.preco.toFixed(2)}
                </ButtonCantainer>
              </div>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PerfilDetails
