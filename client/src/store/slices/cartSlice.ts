import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../lib/models/product.interface'

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
		addProduct() {
			console.log('ок')
		},
	},
})

const { reducer: cartReducer, actions } = cartSlice

export const { addProduct } = actions

export default cartReducer
