import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { AuthForm } from '../components/AuthForm/AuthForm'

export const AuthPage: FC = () => {
	const { type } = useParams()

	return (
		<div className='authPage flex justify-center items-center'>
			{type === 'login' ? (
				<AuthForm title='Login' />
			) : type === 'signup' ? (
				<AuthForm title='SignUp' />
			) : (
				<Navigate to='*' />
			)}
		</div>
	)
}
