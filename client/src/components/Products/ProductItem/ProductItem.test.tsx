import { Product } from '../../../lib/models/product.interface'
import { renderWithRouter } from '../../../lib/tests/helpers/renderWithRouter'
import { ProductItem } from './ProductItem'

const product: Product = {
	name: 'Matvey',
	description: 'some descr',
	id: '24',
	image: 'some image',
	price: '159',
}

describe('ProductItem module', () => {
	test('ProductItem component with product prop', () => {
		const { getByTestId } = renderWithRouter(<ProductItem product={product} />)

		expect(getByTestId('product-card')).toBeInTheDocument()
		expect(getByTestId('product-price')).toHaveTextContent('159')
	})
})
