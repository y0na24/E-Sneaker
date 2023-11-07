import { FC } from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { Product } from '../../../lib/models/product.interface'

interface ProductItemProps {
	product: Product
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<Card
			data-testid='product-card'
			as='li'
			shadow='sm'
			isPressable
			onPress={() => console.log('item pressed')}
		>
			<CardBody className='overflow-visible p-0'>
				<Image
					shadow='sm'
					radius='lg'
					width='100%'
					alt={product.name}
					className='w-full object-cover h-[140px]'
					src={product.image}
				/>
			</CardBody>
			<CardFooter className='text-small justify-between'>
				<b>{product.name.split(' ').slice(0, 1).join(' ')}</b>
				<p data-testid='product-price' className='text-default-500'>
					{product.price}
				</p>
			</CardFooter>
		</Card>
	)
}
