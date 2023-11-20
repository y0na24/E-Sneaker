import { FC } from 'react'

import { Loader } from '../components/ui/Loader'
import { Catalog } from '../components/Catalog/Catalog'

import { useGetAllProductsQuery } from '../services/products.service'
import { useAppSelector } from '../hooks/redux'
import { Navigate } from 'react-router-dom'

export const CatalogPage: FC = () => {
	const {
		data: products,
		isLoading,
		isUninitialized,
		isError,
	} = useGetAllProductsQuery()
	const isLoggedIn = useAppSelector(state => state.auth.token)

	if (!isLoggedIn) {
		return <Navigate to={'/'} />
	}

	if (isLoading || isUninitialized) {
		return <Loader />
	}

	if (isError) {
		return <h1>error</h1>
	}

	return <Catalog products={products} />
}
