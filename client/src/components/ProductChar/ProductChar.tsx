import { FC } from 'react'

import { Product } from '../../lib/models/product.interface'

interface ProductCharProps {
	product: Product
}

export const ProductChar: FC<ProductCharProps> = ({ product }) => {
	return (
		<>
			<div className='text-center'>
				<h2 data-testid='char-title' className='title'>
					{product.name}
				</h2>
				<div className='mb-5'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, error
					reiciendis quae iusto aspernatur ratione quas facilis? Reiciendis
					voluptates deserunt quos molestias iusto dolores dolorem.
				</div>
			</div>
		</>
	)
}
