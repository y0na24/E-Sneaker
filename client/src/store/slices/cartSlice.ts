import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../lib/models/product.interface'
import { RootState } from '../store'

interface CartState {
	cartList: Product[]
}

const initialState: CartState = {
	cartList: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleProduct: (state, action: PayloadAction<Product | number>) => {
			if (typeof action.payload === 'number') {
				const itemToDelete = state.cartList.find(
					product => product.id === action.payload
				)

				if (!itemToDelete) return

				itemToDelete.isInCart = !itemToDelete?.isInCart

				state.cartList = state.cartList.filter(
					product => product.id !== action.payload
				)
			} else {
				state.cartList.push({
					...action.payload,
					isInCart: true,
				})
			}

			// if (action.payload.isInCart) {
			// 	const itemToDelete = state.cartList.find(
			// 		product => product.id === action.payload.id
			// 	)

			// 	if (!itemToDelete) return

			// 	itemToDelete.isInCart = !itemToDelete?.isInCart

			// 	state.cartList = state.cartList.filter(
			// 		product => product.id !== action.payload.id
			// 	)
			// } else {
			// 	state.cartList.push({
			// 		...action.payload,
			// 		isInCart: true,
			// 	})
			// }
		},
	},
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice
export const isProductInCart = (id: number) => (state: RootState) => {
	return state.cart.cartList.findIndex(product => product.id === id) !== -1
}
