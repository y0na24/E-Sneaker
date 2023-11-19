import { ProductDescription } from './ProductDescription'

import { product } from '../../lib/tests/constants/products'
import { renderWithRouter } from '../../lib/tests/helpers/renderWithRouter'

describe('ProductDescription', () => {
	test('component rendering', () => {
		const { getByTestId } = renderWithRouter(
			<ProductDescription product={product} />
		)

		expect(getByTestId('product-description')).toBeInTheDocument()
	})
})
