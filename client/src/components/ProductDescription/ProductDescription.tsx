import { FC } from 'react'
import { Image } from '@nextui-org/react'
import { Product } from '../../lib/models/product.interface'
import { ProductComments } from '../ProductComments/ProductComments'

interface ProductDescriptionProps {
	product: Product
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
	product,
}) => {
	return (
		<>
			<div
				data-testid='product-description'
				className='flex flex-col items-center lg:flex-row lg:items-start gap-5 mb-20'
			>
				<Image
					width={500}
					height={500}
					className='min-w-[320px] md:min-w-[400px]'
					src={product.image}
					alt='Электронная книга'
				/>
				<div className='max-w-[500px]'>
					<h2 className='title mb-2'>Описание</h2>
					<p className='text'>
						{product.description} Далеко-далеко за, словесными горами в стране
						гласных и согласных живут рыбные тексты. Продолжил что то, великий
						запятой злых страну, эта последний, агентство дорогу грустный они
						мир. Реторический ipsum имени точках дороге свой. Далеко-далеко за,
						словесными горами в стране гласных и согласных живут рыбные тексты.
						Своих осталось пояс моей которой собрал его ведущими выйти злых
						рыбными сих домах напоивший за реторический, мир заголовок. Ее,
						алфавит? Далеко-далеко за словесными горами в стране гласных и
						согласных живут, рыбные тексты. Эта толку одна, бросил
						парадигматическая рекламных приставка себя ручеек встретил, лучше
						предложения, проектах прямо правилами. Сих за пунктуация злых
						обеспечивает?
					</p>
				</div>
			</div>
			<ProductComments />
		</>
	)
}
