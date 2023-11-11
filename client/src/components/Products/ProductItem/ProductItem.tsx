import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'

import { HeartIcon } from '../../ui/HeartIcon'

import { Product } from '../../../lib/models/product.interface'

interface ProductItemProps {
	product: Product
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const [liked, setLiked] = useState(false)

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
			<CardFooter className='justify-between items-center'>
				<Button
					isIconOnly
					className='text-default-900/60 data-[hover]:bg-foreground/10'
					radius='full'
					variant='light'
					onPress={() => setLiked(v => !v)}
				>
					<HeartIcon
						size={30}
						className={liked ? '[&>path]:stroke-transparent' : ''}
						fill={liked ? '#2563eb' : 'none'}
					/>
				</Button>
				<Button radius='sm' color='primary'>
					<Link to={`/catalog/${product.id}`}>Подробнее</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
