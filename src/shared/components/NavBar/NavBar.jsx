import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectShopId } from '@redux/Shops/selectors'
import linksData from '../../data/side-link-data'
import styles from './NavBar.module.scss'

const NavBar = ({ typeStyle }) => {
	const shopId = useSelector(selectShopId)
	const navStyle = typeStyle === 'Header' ? `${styles.navBarHeader} }` : `${styles.navBarFooter} }`
	const linkStyle = typeStyle === 'Header' ? `${styles.linkHeader} }` : `${styles.linkFooter} }`

	return (
		<nav className={navStyle}>
			{linksData.map((link, index) => (
				<Link key={index} to={link.path === '/shop/:shopId' ? `/shop/${shopId}` : link.path} className={linkStyle}>
					<span>{link.name}</span>
				</Link>
			))}
		</nav>
	)
}

export default NavBar
