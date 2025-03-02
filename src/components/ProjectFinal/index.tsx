import {
  ButtonCart,
  ButtonContainer,
  FaseEnd,
  TextEnd,
  Sidebar,
  Overlay
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeFinalProject } from '../../store/reducers/cart'

const ProjectFinal = () => {
  // Adicionando o useSelector para verificar o estado
  const { isFinalProjectOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeFinalProjectPage = () => {
    dispatch(closeFinalProject()) // Fecha o ProjectFinal
  }

  // Adicionando verificação de classe para garantir visibilidade
  return (
    <FaseEnd className={isFinalProjectOpen ? 'is-open' : ''}>
      <Overlay onClick={closeFinalProjectPage} />
      <Sidebar>
        <h3>
          Pedido realizado - <span>Número do pedido</span>
        </h3>
        <div>
          <TextEnd>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </TextEnd>
          <TextEnd>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </TextEnd>
          <TextEnd>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </TextEnd>
          <TextEnd>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </TextEnd>
        </div>
        <ButtonContainer>
          <div>
            <ButtonCart
              onClick={closeFinalProjectPage} // Fecha o ProjectFinal
              title="Clique aqui para concluir"
              type="button"
            >
              Concluir
            </ButtonCart>
          </div>
        </ButtonContainer>
      </Sidebar>
    </FaseEnd>
  )
}

export default ProjectFinal
