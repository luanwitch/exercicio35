import { ButtonCantainer } from './styles'

type Props = {
  title: string
  onClick?: () => void
  children: string
}

const ButtonPerfilDetails = ({ title, onClick, children }: Props) => (
  <ButtonCantainer type="button" title={title} onClick={onClick}>
    {children}
  </ButtonCantainer>
)

export default ButtonPerfilDetails
