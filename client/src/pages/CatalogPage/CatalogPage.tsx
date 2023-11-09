import { FC, useState, useEffect, useMemo } from 'react'
import { Input } from '@nextui-org/react'
import { debounce } from 'lodash'

import { ProductList } from '../../components/Products/ProductLIst/ProductList'
import { ProductItem } from '../../components/Products/ProductItem/ProductItem'
import { Product } from '../../lib/models/product.interface'
import { useProductsSerivce } from '../../services/products.service'
import { Loader } from '../../components/ui/Loader'

export const CatalogPage: FC = () => {
	const [value, setValue] = useState('')
	const [products, setProducts] = useState<Product[]>([])

	const { getAllProducts } = useProductsSerivce()

	useEffect(() => {
		const fetchAllProducts = async () => {
			const products = await getAllProducts()

			setProducts(products)
		}

		fetchAllProducts()
	}, [getAllProducts])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('ок')
		setValue(e.target.value)
	}

	const filteredProducts = products.filter(product => {
		return product.name.toLowerCase().includes(value.toLowerCase())
	})

	const handleDebouncedChange = useMemo(() => {
		return debounce(handleChange, 300)
	}, [])

	return (
		<div className='mx-auto mt-[60px] max-w-[850px]'>
			{products.length > 0 ? (
				<div>
					<Input
						onChange={handleDebouncedChange}
						type='email'
						color='primary'
						label='Модель'
						placeholder='Название модели'
						className='max-w-[220px] mb-6 ml-auto'
					/>
					<ProductList
						products={filteredProducts}
						renderProduct={product => (
							<ProductItem key={product.id} product={product} />
						)}
					/>
				</div>
			) : (
				<Loader />
			)}
		</div>
	)
}
