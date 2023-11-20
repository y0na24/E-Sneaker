import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { ProductList } from '../components/Products/ProductLIst/ProductList'
import { Spacer } from '@nextui-org/react'
import { CartItem } from '../components/CartItem/CartItem'
import { cn } from '../lib/helpers/cn'
import { Loader } from '../components/ui/Loader'
import { Navigate } from 'react-router-dom'
import { useGetCartQuery } from '../services/cart.service'

export const CartPage: FC = () => {
	const {
		data: cartProducts,
		isLoading,
		isUninitialized,
		isError,
	} = useGetCartQuery()
	const isLoggedIn = useAppSelector(state => state.auth.token)

	if (!isLoggedIn) {
		return <Navigate to={'/'} />
	}

	if (isLoading || isUninitialized) {
		return <Loader />
	}

	if (isError) {
		return <Navigate to='*' />
	}

	const isCartEmpty = cartProducts.length <= 0

	return (
		<div className='pt-10 mx-auto max-w-[700px]'>
			<h1
				className={cn('text-center title', {
					'!text-red-600': isCartEmpty,
				})}
			>
				{isCartEmpty ? 'Your cart is empty' : 'Your cart'}
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
