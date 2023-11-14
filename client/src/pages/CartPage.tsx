import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { getCartProducuts } from '../store/slices/cartSlice'
import { ProductList } from '../components/Products/ProductLIst/ProductList'
import { Spacer } from '@nextui-org/react'
import { CartItem } from '../components/CartItem/CartItem'

export const CartPage: FC = () => {
	const cartProducts = useAppSelector(getCartProducuts)

	return (
		<div className='pt-10 mx-auto max-w-[700px]'>
			<h1 className='text-center title'>Ваша корзина</h1>
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
