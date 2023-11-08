import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Loader } from '../components/ui/Loader'

import { useProductsSerivce } from '../services/products.service'

import { Product } from '../lib/models/product.interface'

interface ProductPageProps {}

export const ProductPage: FC<ProductPageProps> = () => {
	const [product, setProduct] = useState<Product | Record<string, never>>({})

	const { getProductById } = useProductsSerivce()
	const { productId } = useParams()

	useEffect(() => {
		const fetchProductById = async () => {
			if (productId) {
				const product = await getProductById(productId)
				setProduct(product as Product)
			}
		}

		fetchProductById()
	}, [productId, getProductById])

	return (
		<div className='mx-auto max-w-[1000px] flex'>
			{Object.keys(product).length > 0 ? <div>{productId}</div> : <Loader />}
		</div>
	)
}
