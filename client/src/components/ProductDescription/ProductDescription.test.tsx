import { render } from '@testing-library/react'

import { ProductDescription } from './ProductDescription'

import { product } from '../../lib/tests/constants/products'

describe('ProductDescription', () => {
	test('component rendering', () => {
		const { getByTestId } = render(<ProductDescription product={product} />)

		expect(getByTestId('product-description')).toBeInTheDocument()
	})
})
