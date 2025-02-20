import { useEffect, useState, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import PerfilList from '../../components/PerfilList'
import fechar_modal from '../../assets/image/fechar-modal.png'
import { Modal, ModalContent } from './styles'
import { Produto } from '../Home'

const PerfilDetails = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const pratoId = searchParams.get('prato') // Captura o ID do prato da URL

  const [restaurantes, setRestaurantes] = useState<Produto[]>([])
  const [restaurante, setRestaurante] = useState<Produto | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<
    Produto['cardapio'][0] | null
  >(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
      .catch((err) => console.error('Erro ao buscar os dados:', err))
  }, [])

  // Função para calcular a posição ideal de scroll
  const scrollToPosition = () => {
    // Posição mais baixa (450px do topo)
    const offsetFromTop = 450

    window.scrollTo({
      top: offsetFromTop,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    if (id && restaurantes.length > 0) {
      const encontrado = restaurantes.find((r) => r.id === Number(id))
      setRestaurante(encontrado || null)

      // Se o prato foi passado na URL, abre o modal automaticamente
      if (encontrado && pratoId) {
        const pratoSelecionado = encontrado.cardapio.find(
          (p) => p.id === Number(pratoId)
        )
        if (pratoSelecionado) {
          setSelectedItem(pratoSelecionado)
          setModalIsOpen(true)

          // Scroll para posição ajustada com delay maior
          setTimeout(() => {
            scrollToPosition()
          }, 200)
        }
      }
    }
  }, [id, restaurantes, pratoId])

  const handleProductClick = (item: Produto['cardapio'][0]) => {
    setSelectedItem(item)
    setModalIsOpen(true)

    // Scroll para posição mais baixa com delay adequado
    setTimeout(() => {
      scrollToPosition()
    }, 200)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
      <div ref={listRef}>
        {restaurante ? (
          <PerfilList
            perfils={[restaurante]}
            restauranteId={Number(id)}
            onProductClick={(_, item) => handleProductClick(item)}
            botaoLabel="Mais detalhes"
          />
        ) : (
          <p>Restaurante não encontrado ou sem pratos disponíveis.</p>
        )}
      </div>

      <Modal
        className={modalIsOpen ? 'visivel' : ''}
        onClick={closeModal}
        ref={modalRef}
      >
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
                <button>
                  Adicionar ao carrinho - R$ {selectedItem.preco.toFixed(2)}
                </button>
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
