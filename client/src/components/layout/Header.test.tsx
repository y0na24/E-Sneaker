import { renderWithRouter } from '../../lib/tests/helpers/renderWithRouter'

describe('Header module', () => {
	test('Header rendering', () => {
		const { getByTestId } = renderWithRouter('/catalog')

		expect(getByTestId('header')).toBeInTheDocument()
	})
})
