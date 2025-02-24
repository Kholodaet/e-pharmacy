import { useLocation } from 'react-router-dom'

import styles from './TitleShop.module.scss'
const TitleShop = () => {
	const location = useLocation()
	const isCreatePage = location.pathname === '/shop/create' || location.pathname === '/'
	return (
		<div className={styles.shopTitle}>
			{isCreatePage ? <h2>Create your Shop</h2> : <h2>Edit data</h2>}
			<p>This information will be displayed publicly so be careful what you share.</p>
		</div>
	)
}

export default TitleShop
