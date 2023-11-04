import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'

export const LayoutPage: FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main className='flex-1'>
				<Outlet />
			</main>
		</div>
	)
}
