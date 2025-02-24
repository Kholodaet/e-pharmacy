import { NavLink, Outlet, useParams } from 'react-router-dom'

import styles from './DrugLinkSector.module.scss'

const DrugLinkSector = () => {
	const { shopId } = useParams()

	return (
		<>
			<nav className={styles.DrugLinkSector}>
				<NavLink
					to={`/shop/${shopId}/product`}
					end
					className={({ isActive }) => `${styles.NavLink} ${isActive ? styles.active : ''}`}
				>
					Drug store
				</NavLink>
				<NavLink
					to={`/shop/${shopId}`}
					end
					className={({ isActive }) => `${styles.NavLink} ${isActive ? styles.active : ''}`}
				>
					All medicine
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}

export default DrugLinkSector
