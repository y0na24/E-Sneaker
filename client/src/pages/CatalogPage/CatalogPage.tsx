import { FC, useState, useRef } from 'react'
import { Spinner, Input } from '@nextui-org/react'
import { debounce } from 'lodash'

import { ProductList } from '../../components/Products/ProductLIst/ProductList'
import { ProductItem } from '../../components/Products/ProductItem/ProductItem'

import { useProducts } from '../../hooks/useProducts'

export const CatalogPage: FC = () => {
	const [value, setValue] = useState('')
	const { products } = useProducts()

	
	//TODO: сделать инпут с поиском по продуктам
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const filteredProducts = products.filter(product => {
		return product.name.toLowerCase().includes(value.toLowerCase())
	})

	const handleDebouncedChange = useRef(debounce(handleChange, 300)).current

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
				<Spinner
					className='absolute top-1/2 left-1/2 -traslate-x-1/2 -traslate-y-1/2'
					size='lg'
				/>
			)}
		</div>
	)
}
