import { Navigate, createBrowserRouter } from 'react-router-dom'
import { LayoutPage } from './pages/LayoutPage'
import { AuthPage } from './pages/AuthPage'
import { ErrorPage } from './pages/ErrorPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Navigate to={'/auth/login'} />,
			},
			{
				path: '/auth/:type',
				element: <AuthPage />,
			},
		],
	},
])
