import { FC } from 'react'
import { CardFooter, Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { type RedirectionLink } from '../../lib/models/redirectionLink.type'

interface AuthFormFooterProps {
	redirectionLink: RedirectionLink
}

export const AuthFormFooter: FC<AuthFormFooterProps> = ({
	redirectionLink,
}) => {
	return (
		<CardFooter className='p-5 flex items-center justify-between'>
			<Link data-testid='form-link' to={`/auth/${redirectionLink}`} className='text-accent underline'>
				{redirectionLink.toLowerCase() === 'login'
					? 'Create account'
					: 'Already have an account?'}
			</Link>
			<Button data-testid='form-btn' type='submit' color='primary'>
				{redirectionLink.toLowerCase() === 'login' ? 'Sign Up' : 'Login'}
			</Button>
		</CardFooter>
	)
}
