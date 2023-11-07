import { Product } from '../../../lib/models/product.interface'
import { render } from '@testing-library/react'
import { ProductList } from './ProductList'
import { ProductItem } from '../ProductItem/ProductItem'

const products: Product[] = [
	{
		name: 'Matvey',
		id: 24,
		description: 'some descr',
		image: 'some image',
		price: '200',
	},
	{
		name: 'Matvey',
		id: 44,
		description: 'some descr',
		image: 'some image',
		price: '200',
	},
	{
		name: 'Matvey',
		id: 34,
		description: 'some descr',
		image: 'some image',
		price: '200',
	},
]

describe('ProductList module', () => {
	test('productList rendering', () => {
		const { getByTestId, getAllByTestId } = render(
			<ProductList
				products={products}
				renderProduct={product => (
					<ProductItem key={product.id} product={product} />
				)}
			/>
		)

		expect(getByTestId('product-list')).toBeInTheDocument()

		const productItems = getAllByTestId('product-card')

		expect(productItems.length).toBe(3)
	})
})
