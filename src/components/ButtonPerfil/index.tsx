import { Link } from 'react-router-dom'
import { ButtonCantainer } from './styles'

type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const ButtonPerfil = ({ title, to, onClick, children }: Props) => {
  if (to) {
    // Se `to` estiver definido, renderiza um Link para navegação
    return (
      <Link to={to} title={title}>
        <ButtonCantainer>{children}</ButtonCantainer>
      </Link>
    )
  }

  // Caso contrário, renderiza como um botão normal
  return (
    <ButtonCantainer type="button" title={title} onClick={onClick}>
      {children}
    </ButtonCantainer>
  )
}

export default ButtonPerfil
