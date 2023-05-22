import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Column from './../../../ui/grid/Column'

const HeaderLogo = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex-items-center'>
				<div className='flex'>
					<Image
						src='/images/logo.svg'
						width={100}
						height={100}
						alt='Lorian shop'
						className=''
					/>
					<span>
						<span className='text-white  block tracking-[0.14em]'>Lorian</span>
						<span className='tracking-[0.4em] text-dark-gray block font-extralight text-sm'>
							Store
						</span>
					</span>
				</div>
			</Link>
		</Column>
	)
}

export default HeaderLogo
