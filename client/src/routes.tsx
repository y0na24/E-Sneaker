import { Navigate } from 'react-router-dom'
import { LayoutPage } from './pages/LayoutPage'
import { AuthPage } from './pages/AuthPage'
import { ErrorPage } from './pages/ErrorPage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage'

export const routerConfig = [
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
			{
				path: '/catalog',
				children: [
					{
						index: true,
						element: <CatalogPage />,
					},
					{
						path: ':productId',
						element: <ProductPage />,
					},
				],
			},
		],
	},
]
