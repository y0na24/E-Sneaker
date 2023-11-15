import { FC, HTMLAttributes } from 'react'

import { Product } from '../../../lib/models/product.interface'
import { cn } from '../../../lib/helpers/cn'

interface ProductListProps extends HTMLAttributes<HTMLUListElement> {
	products: Product[]
	renderProduct: (product: Product) => JSX.Element
}

export const ProductList: FC<ProductListProps> = ({
	products,
	renderProduct,
	className,
	...props
}) => {
	return (
		<ul
			data-testid='product-list'
			className={cn('gap-3 grid sm:grid-cols-2 md:grid-cols-3', className)}
			{...props}
		>
			{products.map(product => renderProduct(product))}
		</ul>
	)
}
