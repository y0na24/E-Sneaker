import { Product } from '../../models/product.interface'

const hasRequiredProductFields = (
	obj: Product,
	requiredFields: string[]
): boolean => {
	return Object.keys(obj).every(item => {
		return requiredFields.some(field => item === field)
	})
}

export default hasRequiredProductFields
