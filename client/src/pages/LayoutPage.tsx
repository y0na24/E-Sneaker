import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface LayoutPageProps {}

export const LayoutPage: FC<LayoutPageProps> = ({}) => {
	return (
		<>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>
	)
}
