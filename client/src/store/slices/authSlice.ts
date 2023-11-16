import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInputFields } from '../../lib/models/inputFields.interface'

interface AuthSliceState {
	user: IInputFields | null
	token: string | null
}

const initialState: AuthSliceState = {
	user: null,
	token: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (
			state,
			action: PayloadAction<{ user: IInputFields; accessToken: string }>
		) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
		},
		logOut: state => {
			state.user = null
			state.token = null
		},
	},
})

export const { reducer: authReducer, actions: authActions } = authSlice
