import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  orderId?: string
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
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
}

type Purchaseresponse = {
  delivery: null
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    // Endpoint para buscar todos os restaurantes
    getRestaurantsProduct: builder.query<Produto[], void>({
      query: () => 'restaurantes'
    }),

    // Endpoint para buscar um restaurante específico pelo ID
    getRestaurantById: builder.query<Produto, number>({
      query: (id) => `restaurantes/${id}`
    }),

    // Endpoint para buscar um prato específico pelo ID do restaurante e do prato
    getDishById: builder.query<
      Produto['cardapio'][0],
      { restaurantId: number; dishId: number }
    >({
      query: ({ restaurantId, dishId }) =>
        `restaurantes/${restaurantId}/cardapio/${dishId}`
    }),
    purchase: builder.mutation<Purchaseresponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

// Exporte os hooks gerados automaticamente
export const {
  useGetRestaurantsProductQuery,
  useGetRestaurantByIdQuery,
  useGetDishByIdQuery,
  usePurchaseMutation
} = api

export default api
