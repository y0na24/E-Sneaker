import { FC, useState } from 'react'
import { Button, Textarea } from '@nextui-org/react'
import { Navigate } from 'react-router-dom'

import { Loader } from '../ui/Loader'

import cross from '../../assets/close.png'

import {
	useAddCommentMutation,
	useDeleteCommentMutation,
	useGetAllCommentsQuery,
} from '../../services/comments.service'

import { Comment } from '../../lib/models/comment.interface'

interface ProductCommentsProps {
	productId: number
}

export const ProductComments: FC<ProductCommentsProps> = ({ productId }) => {
	const {
		data: comments,
		isLoading,
		isError,
		isUninitialized,
	} = useGetAllCommentsQuery(productId)
	const [addComment] = useAddCommentMutation()
	const [deleteComment] = useDeleteCommentMutation()
	const [value, setValue] = useState('')

	if (isError || isUninitialized) {
		return <Navigate to='*' />
	}

	if (isLoading) {
		return <Loader />
	}

	const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (value) {
			addComment({ text: value, productId } as Comment)
			setValue('')
		}
	}

	const handleDeleteComment = (id: number) => {
		deleteComment(id)
	}

	return (
		<form className='flex gap-5' onSubmit={handleAddComment}>
			{comments.length > 0 ? (
				<ul className='w-1/2 flex flex-col gap-4 p-2 overflow-y-auto h-[300px]'>
					{comments.map(comment => (
						<li
							key={comment.id}
							className='w-[90%] relative rounded-md  break-all border-2 border-[#E4E4E7] px-6 py-2'
						>
							<p className='inline-block'>{comment.text}</p>
							<img
								onClick={() => handleDeleteComment(comment.id)}
								className='absolute cursor-pointer top-1 right-2'
								width={12}
								height={12}
								src={cross}
								alt='Cross'
							/>
						</li>
					))}
				</ul>
			) : (
				<h2 className='w-1/2'>No comments</h2>
			)}
			<div className='flex flex-col w-1/2'>
				<Textarea
					value={value}
					onChange={e => setValue(e.target.value)}
					className='text mb-3'
					variant='bordered'
					color='primary'
					placeholder='Write the comment...'
				/>
				<Button type='submit' className='ml-auto' color='primary'>
					Add
				</Button>
			</div>
		</form>
	)
}
