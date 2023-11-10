import { Product } from '../models/product.interface'

export const paginate = (
	items: Product[],
	pageNumber: number,
	numberOfItems: number
) => {
	const lastIndex = pageNumber * numberOfItems
	const startIndex = lastIndex - numberOfItems
	return items.slice(startIndex, lastIndex)
}
