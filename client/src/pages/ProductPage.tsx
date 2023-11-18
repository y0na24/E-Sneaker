import { FC, Key, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tabs, Tab } from '@nextui-org/react'

import { Loader } from '../components/ui/Loader'
import { ProductDescription } from '../components/ProductDescription/ProductDescription'
import { ProductChar } from '../components/ProductChar/ProductChar'

import { Product } from '../lib/models/product.interface'
import type { TabName } from '../lib/models/tabName.type'
import { useGetAllProductsQuery } from '../services/products.service'

export const ProductPage: FC = () => {
	const { productId } = useParams()
	const [activeTab, setActiveTab] = useState<TabName>('Description')
	const { product } = useGetAllProductsQuery(undefined, {
		selectFromResult: ({ data }) => ({
			product: data?.find(product => product.id === Number(productId)),
		}),
	})

	if (!product) return

	const renderContent = (product: Product) => {
		switch (activeTab) {
			case 'Description':
				return <ProductDescription product={product} />

			case 'Сharacteristic':
				return <ProductChar product={product} />

			default:
				throw new Error('Ошибка с табом')
		}
	}

	return (
		<div className='mx-auto max-w-[1000px] mt-10'>
			{Object.keys(product as Product).length > 0 ? (
				<>
					<Tabs
						selectedKey={activeTab}
						onSelectionChange={setActiveTab as (key: Key) => string}
						className='mb-5'
						color='primary'
						aria-label='Tabs colors'
						radius='full'
					>
						<Tab key='Description' title='Description' />
						<Tab key='Сharacteristic' title='Сharacteristic' />
					</Tabs>
					{renderContent(product as Product)}
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}
