import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PerfilList from '../../components/PerfilList'
import { ButtonCantainer } from '../../components/Button/styles'
import fechar_modal from '../../assets/image/fechar-modal.png'
import { Modal, ModalContent } from './styles'
import { Produto } from '../Home'

const PerfilDetails = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurantes] = useState<Produto[]>([])
  const [restaurante, setRestaurante] = useState<Produto | null>(null)
  const [loading, setLoading] = useState(true) // 🔹 Novo estado para indicar carregamento
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<
    Produto['cardapio'][0] | null
  >(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  // 🔹 Busca todos os restaurantes uma única vez
  useEffect(() => {
    setLoading(true) // Indica que está carregando os dados
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurantes(data)
        setLoading(false) // 🔹 Dados carregados com sucesso
      })
      .catch((err) => {
        console.error('Erro ao buscar os dados:', err)
        setLoading(false)
      })
  }, [])

  // 🔹 Atualiza o restaurante quando o ID da URL mudar
  useEffect(() => {
    if (id && restaurantes.length > 0) {
      const encontrado = restaurantes.find((r) => r.id === Number(id))
      setRestaurante(encontrado || null)
    }
  }, [id, restaurantes])

  const handleProductClick = (item: Produto['cardapio'][0]) => {
    setSelectedItem(item)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedItem(null)
  }

  useEffect(() => {
    if (modalIsOpen && listRef.current) {
      window.scrollTo({
        top: listRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }, [modalIsOpen])

  return (
    <>
      <div ref={listRef}>
        {loading ? (
          <p>Carregando pratos...</p>
        ) : restaurante ? (
          <PerfilList
            perfils={[restaurante]}
            restauranteId={Number(id)}
            onProductClick={(_, item) => handleProductClick(item)}
          />
        ) : (
          <p>Restaurante não encontrado ou sem pratos disponíveis.</p>
        )}
      </div>

      <Modal className={modalIsOpen ? 'visivel' : ''} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
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
