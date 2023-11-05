import { FC, useEffect, useState } from 'react'
import { Product } from '../lib/models/product.interface'
import hasRequiredProductFields from '../lib/helpers/hasRequiredFields/hasRequiredFields'
import { PRODUCT_FIELDS } from '../lib/constants/productFields'

export const CatalogPage: FC = () => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('https://798d43654dade824.mokky.dev/products')
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

	//TODO:  make cards with mock data
	return (
		<div className='mx-auto px-3 max-w-[1120px]'>
			<ul>
				{products &&
					products.map((product: Product) => (
						<li key={product.id}>{product.name}</li>
					))}
			</ul>
		</div>
	)
}
