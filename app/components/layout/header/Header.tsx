import { FC } from 'react'

import s from './Header.module.scss'
import HeaderButtons from './headerButtons/HeaderButtons'
import HeaderLogo from './headerLogo/HeaderLogo'
import HeaderProfile from './headerProfile/HeaderProfile'
import HeaderMenu from './menu/HeaderMenu'

const Header: FC = () => {
	return (
		<header className={s.header}>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
		</header>
	)
}

export default Header
