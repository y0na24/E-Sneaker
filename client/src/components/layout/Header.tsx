import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Badge,
	Button,
} from '@nextui-org/react'

import { CartIcon } from '../ui/CartIcon'

import logo from '../../assets/sneaker.png'
import { useGetCartQuery } from '../../services/cart.service'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { authActions } from '../../store/slices/authSlice'
import { cn } from '../../lib/helpers/cn'

export const Header: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { cartLength } = useGetCartQuery(undefined, {
		selectFromResult: ({ data }) => ({
			cartLength: data?.length,
		}),
	})
	const isLoggedIn = useAppSelector(state => state.auth.token)

	const handleLogOut = async () => {
		try {
			await dispatch(authActions.logOut())
			navigate('/')
		} catch (err) {
			console.log('Ошибка лог аута')
		}
	}

	return (
		<header data-testid='header'>
			<Navbar shouldHideOnScroll isBordered>
				<NavbarBrand>
					<Link
						className={cn('flex items-center gap-3', {
							'pointer-events-none': !isLoggedIn,
						})}
						to='/catalog'
					>
						<img src={logo} alt='Logo' width={32} height={32} />
						<p className='font-bold text-inherit'>E-SNEAKER</p>
					</Link>
				</NavbarBrand>
				{isLoggedIn && (
					<NavbarContent justify='end'>
						<Button onClick={handleLogOut} color='primary'>
							Log Out
						</Button>
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
				)}
			</Navbar>
		</header>
	)
}
