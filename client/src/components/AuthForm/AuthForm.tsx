import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardFooter, Button } from '@nextui-org/react'

import { AuthFormHeader } from './AuthFormHeader'

import { validateErrors } from '../../lib/helpers/validateErrors/validateErrors'
import { IInputFields } from '../../lib/models/inputFields.interface'
import { type FormTitle } from '../../lib/models/formTitle.type'
import { AuthFormBody } from './AuthFormBody'

interface AuthFormProps {
	title: FormTitle
}

export const AuthForm: FC<AuthFormProps> = ({ title }) => {
	const [inputFields, setInputFields] = useState<IInputFields>({
		username: '',
		password: '',
	})
	const [errors, setErrors] = useState<IInputFields | null>()

	const routerLink = title === 'Login' ? 'signup' : 'login'

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputFields({
			...inputFields,
			[e.target.name]: e.target.value,
		})
	}

	const hasValidationErrors = () => {
		const errors = validateErrors(inputFields)
		setErrors(errors)

		return Object.values(errors).some(field => field !== '')
	}

	const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault()

		if (hasValidationErrors()) return

		setErrors(null)
		console.log(inputFields)
	}

	return (
		<Card onSubmit={handleSubmit} as='form' className='py-4 w-[475px]'>
			<AuthFormHeader title={title} />
			<AuthFormBody onChange={handleChange} errors={errors as IInputFields} />
			<CardFooter className='p-5 flex items-center justify-between'>
				<Link to={`/auth/${routerLink}`} className='text-accent underline'>
					{routerLink === 'login'
						? 'Create account'
						: 'Already have an account?'}
				</Link>
				<Button type='submit' color='primary'>
					{routerLink === 'login' ? 'Sign Up' : 'Login'}
				</Button>
			</CardFooter>
		</Card>
	)
}
