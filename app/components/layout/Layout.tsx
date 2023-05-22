import { FC, PropsWithChildren } from 'react'

import s from './Layout.module.scss'
import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={s.layout}>
				<main>
					<Header />
					<section className={s.content}>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout
