import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import mobileLinksData from '@shared/data/mobile-link-data'
import styles from './MobileBar.module.scss'
import { selectShopId } from '@redux/Shops/selectors'

const MobileBar = ({ onClose }) => {
	const shopId = useSelector(selectShopId)

	return (
		<div className={styles.mobileBar}>
			{mobileLinksData.map((link, index) => (
				<NavLink
					key={index}
					to={link.path === '/shop/:shopId' ? `/shop/${shopId}` : link.path}
					className={styles.mobileBarLink}
					onClick={onClose}
				>
					<span className={styles.span}>{link.name}</span>
				</NavLink>
			))}
		</div>
	)
}
export default MobileBar
