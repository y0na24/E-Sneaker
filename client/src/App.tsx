import { FC } from 'react'
import { routerConfig } from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(routerConfig)

export const App: FC = () => {
	return <RouterProvider router={router} />
}
