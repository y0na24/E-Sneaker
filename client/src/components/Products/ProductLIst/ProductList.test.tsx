import { ProductItem } from '../ProductItem/ProductItem'
import { ProductList } from './ProductList'

import { prodcuts } from '../../../lib/tests/constants/products'
import { renderWithRouter } from '../../../lib/tests/helpers/renderWithRouter'

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
