import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../lib/models/product.interface'
// import { useCallback } from 'react'

// import { useHttp } from '../hooks/useHttp'

// import hasRequiredProductFields from '../lib/helpers/hasRequiredFields/hasRequiredFields'
// import { Product } from '../lib/models/product.interface'
// import { PRODUCT_FIELDS } from '../lib/constants/productFields'

const BASE_URL = 'https://798d43654dade824.mokky.dev/'

const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getAllProducts: builder.query<Product[], void>({
			query: () => 'products',
		}),
	}),
})

export const { useGetAllProductsQuery } = productApi
export default productApi
