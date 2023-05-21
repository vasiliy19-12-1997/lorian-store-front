import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Column from './../../../ui/grid/Column'

type Props = {}

const HeaderLogo = (props: Props) => {
	return (
		<Column size={2}>
			<Link href='/' className='flex-items-center'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='Lorian shop'
					className='mr-2'
				/>
				<span>
					<span className='text-white  block tracking-[0.1em]'>Lorian</span>
					<span className='tracking-[0.4em] text-dark-gray block font-extralight text-sm'>
						Store
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
