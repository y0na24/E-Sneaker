import { Button } from '@nextui-org/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage: FC = () => {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<h1 className='text-red-600 text-6xl'>Error Page!</h1>
			<Button onClick={() => navigate('/')} color='primary'>
				Go back!
			</Button>
		</div>
	)
}
