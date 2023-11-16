import { FC, Dispatch, SetStateAction } from 'react'
import { Button } from '@nextui-org/react'
import { cn } from '../../lib/helpers/cn'

interface PaginationProps {
	totalProducts: number
	productsPerPage: number
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination: FC<PaginationProps> = ({
	totalProducts,
	productsPerPage,
	currentPage,
	setCurrentPage,
}) => {
	const numberOfPages = Math.ceil(totalProducts / productsPerPage)
	const pages = Array(numberOfPages).fill(0)

	return (
		<div className='flex gap-1 mb-10'>
			{pages.map((_, index) => (
				<Button
					key={index}
					radius='full'
					size='sm'
					onClick={() => setCurrentPage(index + 1)}
					className={cn('min-w-[38px] h-[38px] text-white shadow-lg', {
						'bg-primary': index + 1 === currentPage,
					})}
				>
					{index + 1}
				</Button>
			))}
		</div>
	)
}
