import { FC, useState, useMemo } from 'react'
import { Input } from '@nextui-org/react'
import { debounce } from 'lodash'

import { ProductList } from '../components/Products/ProductLIst/ProductList'
import { ProductItem } from '../components/Products/ProductItem/ProductItem'
import { Loader } from '../components/ui/Loader'
import { Pagination } from '../components/ui/Pagination'

import { Product } from '../lib/models/product.interface'
import { paginate } from '../lib/helpers/paginate'
import { useGetAllProductsQuery } from '../services/products.service'

export const CatalogPage: FC = () => {
	const [value, setValue] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const {
		data: products,
		isLoading,
		isUninitialized,
		isError,
	} = useGetAllProductsQuery()

	const handleDebouncedChange = useMemo(() => {
		return debounce(handleChange, 300)
	}, [])

	if (isLoading || isUninitialized) {
		return <Loader />
	}

	if (isError) {
		return <h1>error</h1>
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}

	//логика пагинации

	const filterProducts = (products: Product[]) => {
		return value
			? products.filter(product =>
					product.name.toLowerCase().includes(value.toLowerCase())
			  )
			: products
	}

	const filteredProducts = filterProducts(products)
	const productsPerPage = 6
	const amountOfProducts = filteredProducts.length

	const paginatedProducts = paginate(
		filteredProducts,
		currentPage,
		productsPerPage
	)

	return (
		<div className='mx-auto mt-[40px] max-w-[850px]'>
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
					className='mb-6'
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
		</div>
	)
}
