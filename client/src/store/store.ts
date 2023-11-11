import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productApi from '../services/products.service'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
