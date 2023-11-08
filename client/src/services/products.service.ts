import { Product } from '../lib/models/product.interface'
import { PRODUCT_FIELDS } from '../lib/constants/productFields'
import hasRequiredProductFields from '../lib/helpers/hasRequiredFields/hasRequiredFields'
import { useHttp } from '../hooks/useHttp'

const BASE_URL = 'https://798d43654dade824.mokky.dev/products'

export const useProductsSerivce = () => {
	const { request } = useHttp()

	const getAllProducts = async (): Promise<Product[]> => {
		const products = await request({ url: BASE_URL })

		const hasRequiredFields = products.every((product: Product) =>
			hasRequiredProductFields(product, PRODUCT_FIELDS)
		)

		if (hasRequiredFields) {
			return products
		} else {
			throw new Error('Does not have all required fields')
		}
	}

	const getProductById = async (id: string) => {
		const products: Product[] = await getAllProducts()

		return products.find(product => product.id === id)
	}

	return { getAllProducts, getProductById }
}
