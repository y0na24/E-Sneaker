import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface LayoutPageProps {}

export const LayoutPage: FC<LayoutPageProps> = () => {
	return (
		<>
			<header>Header</header>
			<main className='px-3'>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	)
}
