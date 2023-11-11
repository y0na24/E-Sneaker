import { FC } from 'react'
import { useGetAllProductsQuery } from '../services/products.service'

export const CartPage: FC = () => {
	const { data, isLoading, isUninitialized, isError } = useGetAllProductsQuery()

	if (isLoading || isUninitialized) {
		return <h1>Loading...</h1>
	}

	if (isError) {
		return <h1>Error</h1>
	}
	return (
		<div className='pt-10'>
			<h1 className='text-center title'>Ваша корзина</h1>
			{data.map(data => (
				<li>{data.name}</li>
			))}
		</div>
	)
}
