import { FC, InputHTMLAttributes } from 'react'
import { Input } from '@nextui-org/react'
import { cn } from '../../lib/helpers/cn'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: 'Username' | 'Password' | 'Email'
}

export const TextField: FC<TextFieldProps> = ({
	placeholder,
	label,
	type,
	className,
}) => {
	return (
		<Input
			className={cn('text-gray', className)}
			type={type || 'text'}
			color='primary'
			variant='bordered'
			size='lg'
			placeholder={placeholder}
			label={label}
		/>
	)
}
