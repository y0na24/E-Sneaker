import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserData } from '../../lib/models/user.interface'

interface AuthSliceState {
	user: UserData | null
	token: string | null
}

const user = JSON.parse(localStorage.getItem('user') as string) || null
const token = JSON.parse(localStorage.getItem('token') as string) || null

const initialState: AuthSliceState = {
	user: user,
	token: token,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<User>) => {
			const { data, token } = action.payload
			state.user = { ...data }
			state.token = token

			localStorage.setItem('user', JSON.stringify(state.user))
			localStorage.setItem('token', JSON.stringify(state.token))
		},
		logOut: state => {
			state.user = null
			state.token = null

			localStorage.removeItem('user')
			localStorage.removeItem('token')
		},
	},
})

export const { reducer: authReducer, actions: authActions } = authSlice
