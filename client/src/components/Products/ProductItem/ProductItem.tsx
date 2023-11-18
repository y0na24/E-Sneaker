import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'

import { HeartIcon } from '../../ui/HeartIcon'

import { Product } from '../../../lib/models/product.interface'
import { isProductInCart } from '../../../store/slices/cartSlice'
import { useAppSelector } from '../../../hooks/redux'
import {
	useAddProductToCartMutation,
	useDeleteProductFromCartMutation,
} from '../../../services/cart.service'
import { useGetCartQuery } from '../../../services/cart.service'

interface ProductItemProps {
	product: Product
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const { isProductLiked } = useGetCartQuery(undefined, {
		selectFromResult: ({ data }) => ({
			isProductLiked:
				data?.findIndex(item => item.name === product.name) !== -1,
		}),
	})
	const [addProductToCart, {}] = useAddProductToCartMutation()
	const [deleteProductFromCart, {}] = useDeleteProductFromCartMutation()

	const handleToggleProduct = () => {
		isProductLiked
			? deleteProductFromCart(product.id)
			: addProductToCart({
					description: product.description,
					image: product.image,
					isInCart: true,
					name: product.name,
					price: product.price,
			  } as Product)
	}

	return (
		<Card
			data-testid='product-card'
			as='li'
			shadow='sm'
			onPress={() => console.log('item pressed')}
		>
			<CardBody className='overflow-visible p-0'>
				<Image
					loading='lazy'
					shadow='sm'
					radius='lg'
					width='100%'
					alt={product.name}
					className='w-full object-cover h-[170px]'
					src={product.image}
				/>
			</CardBody>
			<CardFooter className='text-small justify-between'>
				<b>{product.name}</b>
				<p data-testid='product-price' className='text-default-500'>
					${product.price}
				</p>
			</CardFooter>
			<CardFooter className='justify-between items-center'>
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
				<Button radius='sm' color='primary'>
					<Link to={`/catalog/${product.id}`}>Details</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
