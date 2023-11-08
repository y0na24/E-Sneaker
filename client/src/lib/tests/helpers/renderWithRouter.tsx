import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import { routerConfig } from '../../../routes'

export const renderWithRouter = (path: string = '/') => {
	const router = createMemoryRouter(routerConfig, {
		initialEntries: [path],
	})

	return render(<RouterProvider router={router} />)
}
