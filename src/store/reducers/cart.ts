import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../pages/Home'

type CartState = {
  items: Produto['cardapio'][0][] // Itens do carrinho (pratos)
  isOpen: boolean // Estado do carrinho (aberto/fechado)
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto['cardapio'][0]>) => {
      const prato = action.payload
      const pratoJaExiste = state.items.find((item) => item.id === prato.id)

      if (!pratoJaExiste) {
        state.items.push(prato) // Adiciona o prato ao carrinho
      } else {
        alert('Este prato já está no carrinho.') // Evita duplicação
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true // Abre o carrinho
    },
    close: (state) => {
      state.isOpen = false // Fecha o carrinho
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
