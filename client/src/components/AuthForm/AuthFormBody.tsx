import { FC } from 'react'
import { CardBody, Input, Spacer } from '@nextui-org/react'

import { IInputFields } from '../../lib/models/inputFields.interface'

interface AuthFormBodyProps {
	errors: IInputFields | null
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AuthFormBody: FC<AuthFormBodyProps> = ({ onChange, errors }) => {
	return (
		<CardBody className='overflow-visible py-2'>
			<Input
				onChange={onChange}
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
			/>
			<Spacer y={4} />
			<Input
				onChange={onChange}
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
			/>
		</CardBody>
	)
}
