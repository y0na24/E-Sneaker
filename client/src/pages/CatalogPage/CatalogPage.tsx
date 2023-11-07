import { FC } from 'react'

import { ProductList } from '../../components/Products/ProductLIst/ProductList'
import { ProductItem } from '../../components/Products/ProductItem/ProductItem'

import { useProducts } from '../../hooks/useProducts'
import { Spinner } from '@nextui-org/react'

export const CatalogPage: FC = () => {
	const { products } = useProducts()

	//TODO: сделать инпут с поиском по продуктам
	return (
		<div className='mx-auto mt-[75px] max-w-[850px]'>
			{products.length > 0 ? (
				<ProductList
					products={products}
					renderProduct={product => (
						<ProductItem key={product.id} product={product} />
					)}
				/>
			) : (
				<Spinner
					className='absolute top-1/2 left-1/2 -traslate-x-1/2 -traslate-y-1/2'
					size='lg'
				/>
			)}
		</div>
	)
}
