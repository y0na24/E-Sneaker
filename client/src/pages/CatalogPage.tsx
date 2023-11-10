import { FC, useState, useEffect, useMemo } from 'react'
import { Input } from '@nextui-org/react'
import { debounce } from 'lodash'

import { ProductList } from '../components/Products/ProductLIst/ProductList'
import { ProductItem } from '../components/Products/ProductItem/ProductItem'
import { Loader } from '../components/ui/Loader'
import { Pagination } from '../components/ui/Pagination'

import { useProductsSerivce } from '../services/products.service'

import { Product } from '../lib/models/product.interface'
import { paginate } from '../lib/helpers/paginate'

export const CatalogPage: FC = () => {
	const [value, setValue] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const [currentPage, setCurrentPage] = useState(1)

	const { getAllProducts } = useProductsSerivce()

	useEffect(() => {
		const fetchAllProducts = async () => {
			const products = await getAllProducts()

			setProducts(products)
		}

		fetchAllProducts()
	}, [getAllProducts])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	//логика пагинации

	const filterProducts = (products: Product[]) => {
		const filteredProdcuts = value
			? products.filter(product =>
					product.name.toLowerCase().includes(value.toLowerCase())
			  )
			: products

		return filteredProdcuts
	}

	const filteredProducts = filterProducts(products)
	const productsPerPage = 6
	const amountOfProducts = filteredProducts.length

	const paginatedProducts = paginate(
		filteredProducts,
		currentPage,
		productsPerPage
	)

	const handleDebouncedChange = useMemo(() => {
		return debounce(handleChange, 300)
	}, [])

	//TODO: Подумать над декомпозицией и корректной работой фильтрации
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
						className='mb-4'
						products={paginatedProducts}
						renderProduct={product => (
							<ProductItem key={product.id} product={product} />
						)}
					/>
					{paginatedProducts.length >= productsPerPage && (
						<Pagination
							totalProducts={amountOfProducts}
							productsPerPage={productsPerPage}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					)}
				</div>
			) : (
				<Loader />
			)}
		</div>
	)
}
