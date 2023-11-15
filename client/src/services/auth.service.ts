import { apiService } from './api.service'

const authService = apiService.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => ({
				url: '/auth',
				method: 'POST',
				body: { ...credentials },
			}),
		}),
	}),
})

export const { useLoginMutation } = authService
