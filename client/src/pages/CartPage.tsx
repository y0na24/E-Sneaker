import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { getCartProducuts } from '../store/slices/cartSlice'

export const CartPage: FC = () => {
	const cartProducts = useAppSelector(getCartProducuts)

	return (
		<div className='pt-10'>
			<h1 className='text-center title'>Ваша корзина</h1>
			<ul>
				{cartProducts.map(product => (
					<li>{product.name}</li>
				))}
			</ul>
		</div>
	)
}
