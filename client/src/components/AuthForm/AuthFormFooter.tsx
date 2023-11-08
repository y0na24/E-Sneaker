import { FC } from 'react'
import { CardFooter, Link } from '@nextui-org/react'
import { Link as RouterLink } from 'react-router-dom'
import { type RedirectionLink } from '../../lib/models/redirectionLink.type'
import { AuthButton } from '../ui/AuthButton/AuthButton'

interface AuthFormFooterProps {
	redirectionLink: RedirectionLink
}

export const AuthFormFooter: FC<AuthFormFooterProps> = ({
	redirectionLink,
}) => {
	return (
		<CardFooter className='p-5 flex items-center justify-between'>
			<Link as='button' underline='always'>
				<RouterLink data-testid='form-link' to={`/auth/${redirectionLink}`}>
					{redirectionLink === 'login'
						? 'Create account'
						: 'Already have an account?'}
				</RouterLink>
			</Link>
			<AuthButton redirectionLink={redirectionLink} />
		</CardFooter>
	)
}
