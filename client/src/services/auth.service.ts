import { IInputFields } from '../lib/models/inputFields.interface'
import { User } from '../lib/models/user.interface'
import { authActions } from '../store/slices/authSlice'
import { apiService } from './api.service'

const authService = apiService.injectEndpoints({
	endpoints: builder => ({
		register: builder.mutation<User, IInputFields>({
			query: credentials => ({
				url: '/register',
				method: 'POST',
				body: { ...credentials, email: 'test@mail.ru' },
			}),
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(authActions.setCredentials(data))
				} catch (err) {
					console.log('Ошибка при регистрации', err)
				}
			},
		}),
		auth: builder.mutation<User, IInputFields>({
			query: credentials => ({
				url: '/auth',
				method: 'POST',
				body: { ...credentials, email: 'test@mail.ru' },
			}),
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					console.log(data)
					dispatch(authActions.setCredentials(data))
				} catch (err) {
					console.log('Ошибка при авторизации', err)
				}
			},
		}),
	}),
})

export const { useRegisterMutation, useAuthMutation } = authService
