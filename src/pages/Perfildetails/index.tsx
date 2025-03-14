import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import PerfilList from '../../components/PerfilList'
import fechar_modal from '../../assets/image/fechar-modal.png'
import { Modal, ModalContent } from './styles'
import { Produto } from '../Home'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart' // Importe a ação `add`
import Loader from '../../components/Loader'

const PerfilDetails = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const pratoId = searchParams.get('prato')

  // Converter o id para número
  const restauranteId = id ? Number(id) : 0

  // Usar os hooks do RTK Query
  const { data: restaurante } = useGetRestaurantByIdQuery(restauranteId, {
    skip: !restauranteId
  })

  const [selectedDish, setSelectedDish] = useState<
    Produto['cardapio'][0] | null
  >(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Hook para disparar ações do Redux
  const dispatch = useDispatch()

  useEffect(() => {
    if (restaurante && pratoId) {
      const pratoSelecionado = restaurante.cardapio.find(
        (p) => p.id === Number(pratoId)
      )

      if (pratoSelecionado) {
        setSelectedDish(pratoSelecionado)
        setModalIsOpen(true)

        setTimeout(() => {
          window.scrollTo({ top: 450, behavior: 'smooth' })
        }, 200)
      }
    }
  }, [restaurante, pratoId])

  const handleProductClick = (item: Produto['cardapio'][0]) => {
    setSelectedDish(item)
    setModalIsOpen(true)

    setTimeout(() => {
      window.scrollTo({ top: 450, behavior: 'smooth' })
    }, 200)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedDish(null)
  }

  // Função para adicionar o prato ao carrinho
  const handleAddToCart = () => {
    if (selectedDish) {
      dispatch(add(selectedDish)) // Dispara a ação `add` com o prato selecionado
      dispatch(open())
      closeModal() // Fecha o modal após adicionar ao carrinho
    }
  }

  // Mostrar estado de carregamento
  if (!restaurante) {
    return <Loader />
  }

  return (
    <>
      <PerfilList
        perfils={[restaurante]}
        restauranteId={restauranteId}
        onProductClick={(_, item) => handleProductClick(item)}
        botaoLabel="Mais detalhes"
      />

      {/* Modal */}
      {modalIsOpen && selectedDish && (
        <Modal className="visivel" onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <header>
              <img src={fechar_modal} alt="Ícone fechar" onClick={closeModal} />
            </header>
            <img src={selectedDish.foto} alt={selectedDish.nome} />
            <div>
              <h4>{selectedDish.nome}</h4>
              <p>{selectedDish.descricao}</p>
              <p>Porção: {selectedDish.porcao}</p>
              <button onClick={handleAddToCart}>
                Adicionar ao carrinho - R$ {selectedDish.preco.toFixed(2)}
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default PerfilDetails
