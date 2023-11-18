import { FC } from 'react'

import { Product } from '../../lib/models/product.interface'

interface ProductCharProps {
	product: Product
}

export const ProductChar: FC<ProductCharProps> = ({ product }) => {
	return (
		<>
			<div className='text-center'>
				<h2 data-testid='char-title' className='title mb-10'>
					{product.name}
				</h2>
			</div>
		</>
	)
}
