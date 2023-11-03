import { validateErrors } from './validateErrors'

describe('validateErrors module', () => {
	test('input validation with  incorrect username', () => {
		expect(
			validateErrors({ username: 'y0na', password: 'Testpassword24' })
		).toStrictEqual({
			username: 'Username must have at least 8 charachters',
			password: '',
		})
	})

	test('input validation with  incorrect password', () => {
		expect(
			validateErrors({ username: 'y0na24', password: 'testpassword' })
		).toStrictEqual({
			username: '',
			password: 'Password must have at least 8 chars and 1 capital letter',
		})
	})
})
