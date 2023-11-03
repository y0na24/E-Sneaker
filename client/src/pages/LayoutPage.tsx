import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutPage: FC = () => {
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
