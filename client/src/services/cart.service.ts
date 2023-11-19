import { Product } from '../lib/models/product.interface'
import { apiService } from './api.service'

const productService = apiService
	.enhanceEndpoints({
		addTagTypes: ['Cart'],
	})
	.injectEndpoints({
		endpoints: builder => ({
			getCart: builder.query<Product[], void>({
				query: () => 'cart',
				providesTags: data => ['Cart'],
			}),
			addProductToCart: builder.mutation<Product, Product>({
				query: product => ({
					url: `cart`,
					method: 'POST',
					body: product,
				}),
				invalidatesTags: ['Cart'],
			}),
			deleteProductFromCart: builder.mutation<void, number>({
				query: id => ({
					url: `cart/${id}`,
					method: 'DELETE',
				}),
				invalidatesTags: ['Cart'],
			}),
		}),
	})

export const {
	useAddProductToCartMutation,
	useDeleteProductFromCartMutation,
	useGetCartQuery,
} = productService
