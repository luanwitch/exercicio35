import { useEffect, useState } from 'react'
import PerfilList from '../../components/PerfilList'

export type ProdutoPerfil = {
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Perfil = () => {
  const [cardapio, setCardapio] = useState<ProdutoPerfil[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        // Caso a API retorne algo como `data.restaurantes`:
        const formattedData = data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((item: any) =>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            item.cardapio.map((cardapio: any) => ({
              cardapio: {
                foto: cardapio.foto,
                preco: cardapio.preco,
                id: cardapio.id,
                nome: cardapio.nome,
                descricao: cardapio.descricao,
                porcao: cardapio.porcao
              }
            }))
          )
          .flat() // Para criar uma única lista

        setCardapio(formattedData)
      })
      .catch((error) => console.error('Erro ao buscar dados:', error))
  }, [])

  return (
    <PerfilList
      perfils={cardapio}
      onProductClick={(perfil) => console.log('Produto clicado:', perfil)}
    />
  )
}

export default Perfil
