import { FC } from 'react'
import { CardBody, Input, Spacer } from '@nextui-org/react'

import { IInputFields } from '../../lib/models/inputFields.interface'

interface AuthFormBodyProps {
	errors: IInputFields | null
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	inputFields: IInputFields
}

export const AuthFormBody: FC<AuthFormBodyProps> = ({
	onChange,
	errors,
	inputFields,
}) => {
	return (
		<CardBody className='overflow-visible py-2'>
			<Input
				onChange={onChange}
				value={inputFields.username}
				className={'text-gray'}
				type={'text'}
				color='primary'
				variant='bordered'
				size='lg'
				placeholder='Write your username'
				label='Username'
				name='username'
				isInvalid={!!errors?.username}
				errorMessage={errors?.username}
				autoComplete='off'
				data-testid='username-input'
			/>
			<Spacer y={4} />
			<Input
				onChange={onChange}
				value={inputFields.password}
				className='text-gray'
				type='password'
				color='primary'
				variant='bordered'
				size='lg'
				placeholder='Write your password'
				label='Password'
				name='password'
				isInvalid={!!errors?.password}
				errorMessage={errors?.password}
				autoComplete='off'
				data-testid='password-input'
			/>
		</CardBody>
	)
}
