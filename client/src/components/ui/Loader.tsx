import { FC } from 'react'
import { Spinner } from '@nextui-org/react'

export const Loader: FC = () => {
	return (
		<Spinner
			className='absolute top-1/2 left-1/2 -traslate-x-1/2 -traslate-y-1/2'
			size='lg'
		/>
	)
}
