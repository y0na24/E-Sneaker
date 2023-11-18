import { FC, useState } from 'react'
import { Button, Textarea, Card, CardBody } from '@nextui-org/react'

interface ProductCommentsProps {}

export const ProductComments: FC<ProductCommentsProps> = () => {
	const [comments, setComments] = useState([
		{ name: 'BLA BLA BLA BLA', id: '1' },
	])
	const [value, setValue] = useState('')

	const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setComments([...comments, { name: value, id: Date.now().toString() }])
		setValue('')
	}

	const handleDeleteComment = (id: string) => {
		setComments(comments.filter(comment => comment.id !== id))
	}

	return (
		<form className='flex' onSubmit={handleAddComment}>
			{comments.length > 0 ? (
				<ul className='w-1/2 flex flex-col gap-4'>
					{comments.map(comment => (
						<Card key={comment.id} className='max-w-[90%]'>
							<CardBody>
								<p onClick={() => handleDeleteComment(comment.id)}>
									{comment.name}
								</p>
							</CardBody>
						</Card>
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
