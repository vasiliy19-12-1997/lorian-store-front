import React, { FC, PropsWithChildren } from 'react'

const Column: FC<PropsWithChildren<{ size: number }>> = ({
	size,
	children
}) => {
	return (
		<div style={{ gridColumn: `span ${size} / span ${size}` }}>{children}</div>
	)
}

export default Column
