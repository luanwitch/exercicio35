import {
  HeaderBarSaiba,
  ImageFundoSaiba,
  LinkCar,
  Links,
  LinksItem,
  LogoSaibaMais,
  StyledContainer,
  TituloCategorySaiba,
  TituloRodizioSaiba,
  TituloSaiba
} from './styles'
import logo from '../../assets/image/logo.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Produto } from '../../pages/Home'

const HeaderSaiba = () => {
  const [produto, setProduto] = useState<Produto | null>(null) // Estado inicial
  const { id } = useParams() // Obtém o ID da URL

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) {
          // Filtra o restaurante pelo ID diretamente
          const filteredProduto = res.find(
            (item: Produto) => item.id === Number(id)
          )
          setProduto(filteredProduto || null)
        }
      })
      .catch((err) => console.error('Erro ao buscar dados:', err))
  }, [id]) // Executa novamente ao mudar o ID

  return (
    <>
      <HeaderBarSaiba>
        <nav>
          <Links>
            <li>
              <TituloSaiba>Restaurantes</TituloSaiba>
            </li>
            <LinksItem>
              <Link to="/">Home</Link>
            </LinksItem>
            <li>
              <LogoSaibaMais src={logo} alt="e-food" />
            </li>
            <LinksItem>
              <LinkCar href="#">0 produto(s) no carrinho</LinkCar>
            </LinksItem>
          </Links>
        </nav>
      </HeaderBarSaiba>

      {/* Renderiza somente se o produto existir */}
      {produto && (
        <ImageFundoSaiba style={{ backgroundImage: `url(${produto.capa})` }}>
          <StyledContainer>
            <TituloCategorySaiba>{produto.tipo}</TituloCategorySaiba>
            <TituloRodizioSaiba>{produto.titulo}</TituloRodizioSaiba>
          </StyledContainer>
        </ImageFundoSaiba>
      )}
    </>
  )
}

export default HeaderSaiba
