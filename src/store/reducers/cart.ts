import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../pages/Home'

type CartState = {
  items: Produto['cardapio'][0][] // Itens do carrinho (pratos)
  isOpen: boolean // Estado do carrinho (aberto/fechado)
  isOpenDelivery: boolean
  isOpenDeliveryEnd: boolean
  isFinalProjectOpen: boolean // Novo estado para controlar a exibição do FinalProject
  deliveryData: {
    // Adicionando o deliveryData no estado
    fullName: string
    end: string
    city: string
    cep: string
    numero: string
    complement: string
  } | null // Pode ser null inicialmente
  products: any[] // Array de produtos para a API
  paymentData: any // Dados de pagamento para a API
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenDelivery: false,
  isOpenDeliveryEnd: false,
  isFinalProjectOpen: false, // Inicialmente fechado
  deliveryData: null, // Inicializa deliveryData como null
  products: [], // Inicializa products como array vazio
  paymentData: {
    // Dados padrão de pagamento
    card: {
      name: 'Teste',
      number: '1111222233334444',
      code: 123,
      expires: {
        month: 12,
        year: 2030
      }
    }
  }
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

        // Atualiza products para a API quando adiciona um item
        state.products = state.items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      } else {
        alert('Este prato já está no carrinho.') // Evita duplicação
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      // Atualiza products para a API quando remove um item
      state.products = state.items.map((item) => ({
        id: item.id,
        price: item.preco
      }))
    },
    open: (state) => {
      state.isOpen = true // Abre o carrinho
    },
    close: (state) => {
      state.isOpen = false // Fecha o carrinho
    },
    openDelivery: (state) => {
      state.isOpenDelivery = true
    },
    closeDelivery: (state) => {
      state.isOpenDelivery = false
    },
    openDeliveryEnd: (state) => {
      state.isOpenDeliveryEnd = true
    },
    closeDeliveryEnd: (state) => {
      state.isOpenDeliveryEnd = false
    },
    openFinalProject: (state) => {
      state.isFinalProjectOpen = true // Abre o FinalProject
    },
    closeFinalProject: (state) => {
      state.isFinalProjectOpen = false // Fecha o FinalProject
    },
    setDeliveryData: (
      state,
      action: PayloadAction<CartState['deliveryData']>
    ) => {
      state.deliveryData = action.payload // Atualiza os dados de entrega
    },
    setPaymentData: (
      state,
      action: PayloadAction<CartState['paymentData']>
    ) => {
      state.paymentData = action.payload // Atualiza os dados de pagamento
    },
    setProducts: (state, action: PayloadAction<CartState['products']>) => {
      state.products = action.payload // Atualiza os produtos para a API
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openDelivery,
  closeDelivery,
  openDeliveryEnd,
  closeDeliveryEnd,
  openFinalProject,
  closeFinalProject,
  setDeliveryData, // Ação para atualizar deliveryData
  setPaymentData, // Nova ação para atualizar paymentData
  setProducts // Nova ação para atualizar products
} = cartSlice.actions

export default cartSlice.reducer
