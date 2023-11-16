import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { getCartProducuts } from '../store/slices/cartSlice'
import { ProductList } from '../components/Products/ProductLIst/ProductList'
import { Spacer } from '@nextui-org/react'
import { CartItem } from '../components/CartItem/CartItem'
import { cn } from '../lib/helpers/cn'

export const CartPage: FC = () => {
	const cartProducts = useAppSelector(getCartProducuts)
	const isCartEmpty = cartProducts.length <= 0

	return (
		<div className='pt-10 mx-auto max-w-[700px]'>
			<h1
				className={cn('text-center title', {
					'!text-red-600': isCartEmpty,
				})}
			>
				{isCartEmpty ? 'Пусто' : 'Ваша корзина'}
			</h1>
			<Spacer y={5} />
			<ProductList
				products={cartProducts}
				renderProduct={product => (
					<CartItem key={product.id} product={product} />
				)}
			/>
		</div>
	)
}
