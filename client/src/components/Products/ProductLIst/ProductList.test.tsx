import { Product } from '../../../lib/models/product.interface'
import { renderWithRouter } from '../../../lib/tests/helpers/renderWithRouter'
import { ProductItem } from '../ProductItem/ProductItem'
import { ProductList } from './ProductList'

const prodcuts: Product[] = [
	{
		name: 'Matvey',
		id: '24',
		description: 'some description',
		image: 'some image',
		price: '150',
	},
	{
		name: 'Matvey',
		id: '34',
		description: 'some description',
		image: 'some image',
		price: '150',
	},
	{
		name: 'Matvey',
		id: '44',
		description: 'some description',
		image: 'some image',
		price: '150',
	},
]

describe('ProductList module', () => {
	test('productList rendering', () => {
		const { getByTestId, getAllByTestId } = renderWithRouter(
			<ProductList
				products={prodcuts}
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
