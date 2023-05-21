import { FC } from 'react'

import spriner from './Spinner.svg'

const Loader: FC = () => {
	return <img src={spriner.src} alt='loader' width={200} height={200} />
}

export default Loader
