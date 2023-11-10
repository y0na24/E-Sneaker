import { render } from '@testing-library/react'
import { ProductChar } from './ProductChar'
import { product } from '../../lib/tests/constants/products'

describe('ProductChar module', () => {
	test('component rendering', () => {
		const { getByTestId } = render(<ProductChar product={product} />)

		expect(getByTestId('char-title')).toHaveTextContent(product.name)
	})
})
