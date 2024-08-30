class Produto {
  title: string
  category: string[]
  image: string
  infos: string
  nota: number
  description: string
  id: number

  constructor(
    id: number,
    title: string,
    category: string[],
    image: string,
    infos: string,
    nota: number,
    description: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.image = image
    this.infos = infos
    this.nota = nota
    this.description = description
  }
}

export default Produto
