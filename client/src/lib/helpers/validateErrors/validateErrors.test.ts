import { validateErrors } from './validateErrors'

describe('validateErrors module', () => {
	test('input validation with  incorrect username', () => {
		expect(
			validateErrors({ email: 'y0na', password: 'Testpassword24' })
		).toStrictEqual({
			email: 'Email must have at least 6 charachters',
			password: '',
		})
	})

	test('input validation with incorrect password', () => {
		expect(
			validateErrors({ email: 'y0na24', password: 'testpassword' })
		).toStrictEqual({
			email: '',
			password: 'Password must have at least 8 chars and 1 capital letter',
		})
	})
})
