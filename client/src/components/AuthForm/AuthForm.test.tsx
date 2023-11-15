import { fireEvent } from '@testing-library/react'

import { AuthFormHeader } from './AuthFormHeader'
import { AuthFormBody } from './AuthFormBody'

import { renderWithCard } from '../../lib/tests/helpers/renderWithCard'
import { renderWithRouter } from '../../lib/tests/helpers/renderWithRouter'
import { AuthForm } from './AuthForm'

describe('AuthForm module', () => {
	test('form header title', () => {
		const testTitle = 'Login'

		const { getByTestId } = renderWithCard(<AuthFormHeader title={testTitle} />)

		expect(getByTestId('form-title')).toHaveTextContent(testTitle)
	})

	test('form body input value', () => {
		const onChange = jest.fn()
		const errors = { email: 'error', password: '' }
		const inputFields = { email: 'y0na24', password: '' }

		const { getByTestId } = renderWithCard(
			<AuthFormBody
				onChange={onChange}
				errors={errors}
				inputFields={inputFields}
			/>
		)

		const input = getByTestId('username-input') as HTMLInputElement

		expect(input.value).toBe('y0na24')
	})

	test('form footer link and button', async () => {
		const onClick = jest.fn()
		const { getByTestId } = renderWithRouter(
			<AuthForm title='Login' submitForm={onClick} />,
			'/auth/login',
			{
				path: '/auth/signup',
				element: <AuthForm title='SignUp' submitForm={onClick} />,
			}
		)

		const formBtn = getByTestId('form-btn')

		expect(formBtn).toHaveTextContent('Login')

		fireEvent.click(getByTestId('form-link'))

		expect(formBtn).toHaveTextContent('Sign Up')
	})
})
