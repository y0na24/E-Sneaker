import { FC } from 'react'
import { Button } from '@nextui-org/react'
import { type RedirectionLink } from '../../lib/models/redirectionLink.type'

interface AuthButtonProps {
	redirectionLink: RedirectionLink
}

export const AuthButton: FC<AuthButtonProps> = ({ redirectionLink }) => {
	return (
		<Button data-testid='form-btn' type='submit' color='primary'>
			{redirectionLink === 'login' ? 'Sign Up' : 'Login'}
		</Button>
	)
}
