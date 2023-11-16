import { configureStore } from '@reduxjs/toolkit'
import { apiService } from '../services/api.service'

import { cartReducer } from './slices/cartSlice'
import { authReducer } from './slices/authSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		auth: authReducer,
		[apiService.reducerPath]: apiService.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiService.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
