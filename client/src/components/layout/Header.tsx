import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Badge,
} from '@nextui-org/react'
import { useAppSelector } from '../../hooks/redux'

import { CartIcon } from '../ui/CartIcon'

import logo from '../../assets/sneaker.png'

export const Header: FC = () => {
	const cartLength = useAppSelector(state => state.cart.cartList.length)

	return (
		<header data-testid='header'>
			<Navbar shouldHideOnScroll isBordered>
				<NavbarBrand>
					<Link className='flex items-center gap-3' to='/catalog'>
						<img src={logo} alt='Logo' width={32} height={32} />
						<p className='font-bold text-inherit'>E-SNEAKER</p>
					</Link>
				</NavbarBrand>
				<NavbarContent justify='end'>
					<NavbarItem>
						<Link to='/cart'>
							<Badge
								size='md'
								color='primary'
								content={cartLength}
								shape='circle'
							>
								<CartIcon size={30} />
							</Badge>
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</header>
	)
}
