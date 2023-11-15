import { render } from '@testing-library/react'

import { AuthButton } from './AuthButton'

describe('AuthButton module', () => {
	test('button text content', () => {
		const { getByTestId } = render(<AuthButton redirectionLink='login' />)

		expect(getByTestId('form-btn')).toHaveTextContent('Sign Up')
	})
})
