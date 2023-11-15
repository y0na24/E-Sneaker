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
		toggleProduct: (state, action: PayloadAction<Product | string>) => {
			if (typeof action.payload === 'string') {
				state.cartList = state.cartList.filter(
					product => product.id !== action.payload
				)
			} else {
				state.cartList.push(action.payload)
			}
		},
	},
})

const { reducer: cartReducer, actions } = cartSlice

export const { toggleProduct } = actions

export default cartReducer

export const getCartProducuts = (state: RootState) => state.cart.cartList
export const getCartLength = (state: RootState) => state.cart.cartList.length
export const isProductInCart = (id: string) => (state: RootState) => {
	return state.cart.cartList.findIndex(product => product.id === id) !== -1
}
