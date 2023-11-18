import { Product } from '../lib/models/product.interface'
import { apiService } from './api.service'

const productService = apiService
	.enhanceEndpoints({
		addTagTypes: ['Product'],
	})
	.injectEndpoints({
		endpoints: builder => ({
			getAllProducts: builder.query<Product[], void>({
				query: () => 'products',
				providesTags: products => ['Product'],
			}),
		}),
	})

export const { useGetAllProductsQuery } = productService
