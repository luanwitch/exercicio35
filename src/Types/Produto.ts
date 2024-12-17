export type Produto = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[] // É um array de strings
  avaliacao?: number // Pode ser opcional
  descricao?: string // Pode ser opcional
  capa?: string // Pode ser opcional
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}
