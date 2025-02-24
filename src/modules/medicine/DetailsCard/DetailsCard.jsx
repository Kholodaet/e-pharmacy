import { NavLink, Outlet } from 'react-router-dom'
import styles from './DetailsCard.module.scss'
const DetailsCard = () => {
	return (
		<div className={styles.detailsBox}>
			<nav className={styles.navBox}>
				<NavLink className={({ isActive }) => (isActive ? ` ${styles.active}` : styles.button)} to='description'>
					Description
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? ` ${styles.active}` : styles.button)} to='reviews'>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}

export default DetailsCard
