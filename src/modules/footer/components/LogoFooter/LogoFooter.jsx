import { useNavigate } from 'react-router-dom'

import Logo from '@assets/icons/Logo.svg'
import styles from './LogoFooter.module.scss'

const LogoFooter = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.logoSection} onClick={() => navigate('/shop/create')}>
			<img src={Logo} alt='LogoFooter' className={styles.imgLogo} />
			<span>E-Pharmacy</span>
		</div>
	)
}

export default LogoFooter
