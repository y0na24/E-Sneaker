import { Product } from '../../../lib/models/product.interface'
import { ProductItem } from './ProductItem'
import { render } from '@testing-library/react'

const product: Product = {
	name: 'Matvey',
	description: 'some description',
	id: 24,
	image: 'some image',
	price: '159',
}

describe('ProductItem module', () => {
	test('ProductItem component with product prop', () => {
		const { getByTestId } = render(<ProductItem product={product} />)

		expect(getByTestId('product-card')).toBeInTheDocument()
		expect(getByTestId('product-price')).toHaveTextContent('159')
	})
})
