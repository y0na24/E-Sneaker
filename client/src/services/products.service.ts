import { Product } from '../lib/models/product.interface'
import { apiService } from './api.service'

const productService = apiService.injectEndpoints({
	endpoints: builder => ({
		getAllProducts: builder.query<Product[], void>({
			query: () => 'product',
		}),
	}),
})

export const { useGetAllProductsQuery } = productService
