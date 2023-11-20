import { IInputFields } from '../../models/inputFields.interface'

export function validateErrors(inputFields: IInputFields) {
	const { username, password } = inputFields
	const passwordRexEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

	const errors: IInputFields = {
		username: '',
		password: '',
	}

	if (username.length < 6) {
		errors.username = 'Username must have at least 6 charachters'
	}

	if (!password.match(passwordRexEx)) {
		errors.password = 'Password must have at least 8 chars and 1 capital letter'
	}

	return errors
}
