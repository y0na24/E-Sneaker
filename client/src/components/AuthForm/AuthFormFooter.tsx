import { FC } from 'react'
import { CardFooter } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { type RedirectionLink } from '../../lib/models/redirectionLink.type'
import { AuthButton } from '../ui/AuthButton'

interface AuthFormFooterProps {
	redirectionLink: RedirectionLink
}

export const AuthFormFooter: FC<AuthFormFooterProps> = ({
	redirectionLink,
}) => {
	return (
		<CardFooter className='p-5 flex items-center justify-between'>
			<Link
				data-testid='form-link'
				to={`/auth/${redirectionLink}`}
				className='text-accent underline'
			>
				{redirectionLink === 'login'
					? 'Create account'
					: 'Already have an account?'}
			</Link>
			<AuthButton redirectionLink={redirectionLink} />
		</CardFooter>
	)
}
