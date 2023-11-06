import { useState, useEffect } from 'react'

import { Product } from '../lib/models/product.interface'
import { PRODUCT_FIELDS } from '../lib/constants/productFields'
import hasRequiredProductFields from '../lib/helpers/hasRequiredFields/hasRequiredFields'

export const useProducts = () => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('https://798d43654dade824.mokky.dev/products')

				if (!res.ok) throw new Error('Unexpectable error')

				const products = await res.json()

				const hasRequiredFields = products.every((product: Product) =>
					hasRequiredProductFields(product, PRODUCT_FIELDS)
				)

				if (hasRequiredFields) {
					setProducts(products)
				} else {
					throw new Error('Does not have all required fields')
				}
			} catch (err) {
				if (err instanceof Error) {
					console.log(err.message)
				} else {
					console.log(err)
				}
			}
		}

		fetchData()
	}, [])

	return { products }
}
