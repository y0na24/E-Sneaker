import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AuthForm } from '../components/Form/AuthForm'

export const AuthPage: FC = () => {
	const { type } = useParams()

	return (
		<div className='flex justify-center items-center min-h-screen'>
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
