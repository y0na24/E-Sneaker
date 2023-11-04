import { FC } from 'react'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from '@nextui-org/react'
import logo from '../../assets/ebook.png'

export const Header: FC = () => {
	return (
		<header>
			<Navbar shouldHideOnScroll isBordered>
				<NavbarBrand className='flex items-center gap-3'>
					<img src={logo} alt='Logo' width={32} height={32} />
					<p className='font-bold text-inherit'>E-LIBRARY</p>
				</NavbarBrand>
				<NavbarContent justify='end'>
					<NavbarItem>
						<Button as={Link} color='primary' href='#' variant='flat'>
							Dummy
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</header>
	)
}
