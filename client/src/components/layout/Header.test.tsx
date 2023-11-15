import { renderWithRouter } from '../../lib/tests/helpers/renderWithRouter'
import { Header } from './Header'

describe('Header module', () => {
	test('Header rendering', () => {
		const { getByTestId } = renderWithRouter(<Header />)

		expect(getByTestId('header')).toBeInTheDocument()
	})
})
