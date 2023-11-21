import { FC } from 'react'
import { Image } from '@nextui-org/react'
import { Product } from '../../lib/models/product.interface'
import { ProductComments } from '../ProductComments/ProductComments'

interface ProductDescriptionProps {
	product: Product
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
	product,
}) => {
	return (
		<>
			<div
				data-testid='product-description'
				className='flex flex-col items-center lg:flex-row lg:items-start mb-10 lg:gap-5 lg:mb-20'
			>
				<Image
					width={500}
					height={500}
					className='min-w-[320px] mb-5 lg:mb-0 md:min-w-[400px]'
					src={product.image}
					alt='Электронная книга'
				/>
				<div className='max-w-[500px]'>
					<h2 className='title mb-2'>{product.name}</h2>
					<p className='text'>{product.description}</p>
				</div>
			</div>
			<ProductComments productId={product.id} />
		</>
	)
}
