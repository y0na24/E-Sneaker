import { FC } from 'react'
import { Card, Button, Image, CardFooter } from '@nextui-org/react'
import { HeartIcon } from '../ui/HeartIcon'
import { Product } from '../../lib/models/product.interface'

import {
	useAddProductToCartMutation,
	useDeleteProductFromCartMutation,
} from '../../services/cart.service'

interface CartItemProps {
	product: Product
}

export const CartItem: FC<CartItemProps> = ({ product }) => {
	const [addProductToCart, {}] = useAddProductToCartMutation()
	const [deleteProductFromCart, {}] = useDeleteProductFromCartMutation()
	const isProductLiked = product.isInCart

	const handleToggleProduct = () => {
		isProductLiked
			? deleteProductFromCart(product.id)
			: addProductToCart({
					description: product.description,
					image: product.image,
					isInCart: product.isInCart,
					name: product.name,
					price: product.price,
			  } as Product)
	}

	return (
		<Card isFooterBlurred radius='lg' className='border-none'>
			<Image
				alt='Woman listing to music'
				className='object-cover'
				height={400}
				src={product.image}
				width={400}
			/>
			<CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
				<p className='text '>{product.name}</p>
				<Button
					isIconOnly
					className='text-default-900/60 data-[hover]:bg-foreground/10'
					radius='full'
					variant='light'
					onPress={handleToggleProduct}
				>
					<HeartIcon
						size={30}
						className={isProductLiked ? '[&>path]:stroke-transparent' : ''}
						fill={isProductLiked ? '#2563eb' : 'none'}
					/>
				</Button>
			</CardFooter>
		</Card>
	)
}
