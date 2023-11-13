import { FC, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { Input } from '@nextui-org/react'

import { ProductList } from '../Products/ProductLIst/ProductList'
import { ProductItem } from '../Products/ProductItem/ProductItem'
import { Pagination } from '../ui/Pagination'

import { paginate } from '../../lib/helpers/paginate'

import { Product } from '../../lib/models/product.interface'

interface CatalogProps {
	products: Product[]
}

export const Catalog: FC<CatalogProps> = ({ products }) => {
	const [value, setValue] = useState('')
	const [currentPage, setCurrentPage] = useState(1)

	const handleDebouncedChange = useMemo(() => {
		return debounce(handleChange, 300)
	}, [])

	//логика пагинации

	const filterProducts = (products: Product[]) => {
		return value
			? products.filter(product =>
					product.name.toLowerCase().includes(value.toLowerCase())
			  )
			: products
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
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
