import { Header } from '@modules/header'
import { Footer } from '@modules/footer'
import { Outlet } from 'react-router-dom'
import '../../../styles/_container.scss'

const SharedLayout = () => {
	return (
		<div className='container'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default SharedLayout
