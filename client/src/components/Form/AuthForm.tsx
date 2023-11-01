import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Spacer,
	Input,
	Button,
	Link,
} from '@nextui-org/react'

interface AuthFormProps {
	title: 'Login' | 'SignUp'
}

export const AuthForm: FC<AuthFormProps> = ({ title }) => {
	const routerLink = title === 'Login' ? 'signup' : 'login'

	console.log(routerLink)

	return (
		<Card as='form' className='py-4 w-[475px]'>
			<CardHeader className='pt-2 px-4 flex items-center gap-1'>
				<h1 className='title'>{title}</h1>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-7 h-7 text-accent'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
					/>
				</svg>
			</CardHeader>
			<CardBody className='overflow-visible py-2'>
				<Input
					className={'text-gray'}
					type={'text'}
					color='primary'
					variant='bordered'
					size='lg'
					placeholder='Write your username'
					label='Username'
				/>
				<Spacer y={4} />
				<Input
					className='text-gray'
					type='password'
					color='primary'
					variant='bordered'
					size='lg'
					placeholder='Write your password'
					label='Password'
				/>
			</CardBody>
			<CardFooter className='p-5 flex items-center justify-between'>
				<RouterLink to={`/auth/${routerLink}`}>
					<Link as='div' isExternal showAnchorIcon color='primary'>
						{routerLink === 'login'
							? 'Create account'
							: 'Already have an account?'}
					</Link>
				</RouterLink>
				<Button type='submit' color='primary'>
					{routerLink === 'login' ? 'Sign Up' : 'Login'}
				</Button>
			</CardFooter>
		</Card>
	)
}
