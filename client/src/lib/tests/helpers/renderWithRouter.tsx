import {
	RouterProvider,
	createMemoryRouter,
	RouteObject,
} from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

export const renderWithRouter = (
	component: ReactElement,
	path = '/',
	componentToCompare?: RouteObject,
	options?: Omit<RenderOptions, 'wrapper'>
) => {
	const { pathname } = new URL(`http://localhost:5173${path}`)

	const router = createMemoryRouter(
		[
			{
				path: pathname,
				element: component,
			},
			componentToCompare ? componentToCompare : {},
		],
		{ initialEntries: [path] }
	)

	return render(<RouterProvider router={router} />, { ...options })
}
