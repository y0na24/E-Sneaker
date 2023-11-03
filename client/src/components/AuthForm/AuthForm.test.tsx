import { Card } from '@nextui-org/react'
import { AuthFormHeader } from './AuthFormHeader'
import { render } from '@testing-library/react'

describe('AuthForm module', () => {
	test('form header title', () => {
		const testTitle = 'Login'

		const { getByTestId } = render(
			<Card>
				<AuthFormHeader title={testTitle} />
			</Card>
		)

		expect(getByTestId('form-title')).toHaveTextContent(testTitle)
	})
})
