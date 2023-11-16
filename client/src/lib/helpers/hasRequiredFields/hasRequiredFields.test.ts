import { PRODUCT_FIELDS } from '../../constants/productFields'
import { Product } from '../../models/product.interface'
import hasRequiredProductFields from './hasRequiredFields'

describe('hasRequiredFields module', () => {
	test('correct fields from api', () => {
		const correctObj: Product = {
			name: 'Matvey',
			id: '24',
			price: '100',
			description: 'some text',
			isInCart: false,
			image: 'imageURL',
		}

		expect(hasRequiredProductFields(correctObj, PRODUCT_FIELDS)).toBe(true)
	})

	test('incorrect fields from api', () => {
		const incorrectObj = {
			name: 'Matvey',
			id: '24',
			price: '100',
			description: 'some text',
			image: 'imageURL',
			isInCart: false,
			someRandomField: 'fadslkfadslkf',
		}

		expect(hasRequiredProductFields(incorrectObj, PRODUCT_FIELDS)).toBe(false)
	})
})
