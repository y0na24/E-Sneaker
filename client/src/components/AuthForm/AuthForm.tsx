import { FC, useState } from 'react'
import { Card } from '@nextui-org/react'

import { AuthFormHeader } from './AuthFormHeader'
import { AuthFormBody } from './AuthFormBody'
import { AuthFormFooter } from './AuthFormFooter'

import { validateErrors } from '../../lib/helpers/validateErrors/validateErrors'
import { IInputFields } from '../../lib/models/inputFields.interface'
import type { FormTitle } from '../../lib/models/formTitle.type'

interface AuthFormProps {
	title: FormTitle
	submitForm: (inputFields: IInputFields) => void
}

export const AuthForm: FC<AuthFormProps> = ({ title, submitForm }) => {
	const [inputFields, setInputFields] = useState<IInputFields>({
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState<IInputFields | null>()

	const redirectionLink = title === 'Login' ? 'signup' : 'login'

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
		submitForm(inputFields)
	}

	return (
		<Card onSubmit={handleSubmit} as='form' className='py-4 w-[475px]'>
			<AuthFormHeader title={title} />
			<AuthFormBody
				onChange={handleChange}
				errors={errors as IInputFields}
				inputFields={inputFields}
			/>
			<AuthFormFooter redirectionLink={redirectionLink} />
		</Card>
	)
}
