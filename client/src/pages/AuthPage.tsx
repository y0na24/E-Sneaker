import { FC } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { AuthForm } from '../components/AuthForm/AuthForm'
import { IInputFields } from '../lib/models/inputFields.interface'
import { useAuthMutation, useRegisterMutation } from '../services/auth.service'
import { useAppSelector } from '../hooks/redux'

export const AuthPage: FC = () => {
	const { type } = useParams()
	const navigate = useNavigate()
	const [register] = useRegisterMutation()
	const [auth] = useAuthMutation()
	const isLoggedIn = useAppSelector(state => state.auth.token)

	if (isLoggedIn) {
		return <Navigate to='/catalog' />
	}

	const submitRegister = async (inputFields: IInputFields) => {
		try {
			await register(inputFields).unwrap()
			navigate('/catalog')
		} catch (err) {
			console.log('Ошибка с компоненте AuthPage при регистрации')
		}
	}

	const submitAuth = async (inputFields: IInputFields) => {
		try {
			await auth(inputFields).unwrap()
			navigate('/catalog')
		} catch (err) {
			console.log('Ошибка с компоненте AuthPage при регистрации')
		}
	}

	return (
		<div className='authPage flex justify-center items-center'>
			{type === 'login' ? (
				<AuthForm title='Login' submitForm={submitRegister} />
			) : type === 'signup' ? (
				<AuthForm title='SignUp' submitForm={submitAuth} />
			) : (
				<Navigate to='*' />
			)}
		</div>
	)
}
