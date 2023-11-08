import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Button,
} from '@nextui-org/react'

import logo from '../../assets/ebook.png'

export const Header: FC = () => {
	return (
		<header data-testid='header'>
			<Navbar shouldHideOnScroll isBordered>
				<NavbarBrand className='flex items-center gap-3'>
					<img src={logo} alt='Logo' width={32} height={32} />
					<p className='font-bold text-inherit'>E-LIBRARY</p>
				</NavbarBrand>
				<NavbarContent justify='end'>
					<NavbarItem>
						<Button color='primary' variant='flat'>
							<Link to='/catalog'>Home</Link>
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</header>
	)
}
