import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Tipo para os produtos enviados à API
type ProductAPI = {
  id: number
  price: number
}

// Tipo para os dados de pagamento
type PaymentData = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

// Tipo para os dados de entrega
type DeliveryData = {
  fullName: string
  end: string
  city: string
  cep: string
  numero: string
  complement: string
} | null

// Estado do carrinho
type CartState = {
  items: Produto['cardapio'][0][] // Itens do carrinho (pratos)
  isOpen: boolean
  isOpenDelivery: boolean
  isOpenDeliveryEnd: boolean
  isFinalProjectOpen: boolean
  deliveryData: DeliveryData
  products: ProductAPI[]
  paymentData: PaymentData
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenDelivery: false,
  isOpenDeliveryEnd: false,
  isFinalProjectOpen: false,
  deliveryData: null,
  products: [],
  paymentData: {
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
        state.items.push(prato)
        state.products = state.items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      } else {
        alert('Este prato já está no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.products = state.items.map((item) => ({
        id: item.id,
        price: item.preco
      }))
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
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
      state.isFinalProjectOpen = true
    },
    closeFinalProject: (state) => {
      state.isFinalProjectOpen = false
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.deliveryData = action.payload
    },
    setPaymentData: (state, action: PayloadAction<PaymentData>) => {
      state.paymentData = action.payload
    },
    setProducts: (state, action: PayloadAction<ProductAPI[]>) => {
      state.products = action.payload
    },
    clearItems: (state) => {
      state.items = []
      state.products = []
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
  setDeliveryData,
  setPaymentData,
  setProducts,
  clearItems
} = cartSlice.actions

export default cartSlice.reducer
