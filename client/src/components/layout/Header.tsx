import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Badge,
} from '@nextui-org/react'

import logo from '../../assets/ebook.png'
import { CartIcon } from '../ui/CartIcon'

export const Header: FC = () => {
	return (
		<header data-testid='header'>
			<Navbar shouldHideOnScroll isBordered>
				<NavbarBrand>
					<Link className='flex items-center gap-3' to='/catalog'>
						<img src={logo} alt='Logo' width={32} height={32} />
						<p className='font-bold text-inherit'>E-LIBRARY</p>
					</Link>
				</NavbarBrand>
				<NavbarContent justify='end'>
					<NavbarItem>
						<Link to='/cart'>
							<Badge size='sm' color='primary' content={50} shape='circle'>
								<CartIcon size={30} />
							</Badge>
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</header>
	)
}
