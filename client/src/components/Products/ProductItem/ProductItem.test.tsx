import { ProductItem } from './ProductItem'

import { product } from '../../../lib/tests/constants/products'
import { renderWithRouter } from '../../../lib/tests/helpers/renderWithRouter'

describe('ProductItem module', () => {
	test('ProductItem component with product prop', () => {
		const { getByTestId } = renderWithRouter(<ProductItem product={product} />)

		expect(getByTestId('product-card')).toBeInTheDocument()
		expect(getByTestId('product-price')).toHaveTextContent('159')
	})
})
