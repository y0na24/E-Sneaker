import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { AuthForm } from '../components/AuthForm/AuthForm'
import { IInputFields } from '../lib/models/inputFields.interface'
import { useLoginMutation } from '../services/auth.service'
import { useAppDispatch } from '../hooks/redux'
import { setCredentials } from '../store/slices/authSlice'

export const AuthPage: FC = () => {
	const dispatch = useAppDispatch()
	const { type } = useParams()
	const [login] = useLoginMutation()

	const submitLogin = async (inputFields: IInputFields) => {
		try {
			const accessToken = await login(inputFields).unwrap()
			dispatch(setCredentials({ user: inputFields, accessToken }))
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='authPage flex justify-center items-center'>
			{type === 'login' ? (
				<AuthForm title='Login' submitForm={submitLogin} />
			) : type === 'signup' ? (
				<AuthForm title='SignUp' submitForm={submitLogin} />
			) : (
				<Navigate to='*' />
			)}
		</div>
	)
}
