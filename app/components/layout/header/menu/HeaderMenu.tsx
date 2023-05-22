import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

import s from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
	return (
		<Column size={12}>
			<div className={s.menu}>
				<Link href='/'></Link>
				<nav>
					<ul>
						{menu.map(item => (
							<MenuItem key={item.link} item={item} />
						))}
					</ul>
				</nav>
			</div>
		</Column>
	)
}

export default Menu
