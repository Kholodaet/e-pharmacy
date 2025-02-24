import { useNavigate } from 'react-router-dom'

import MedLogo from '../../../../src/assets/icons/MedLogo.svg'
import styles from './LogoType.module.scss'

const LogoType = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.logoSection} onClick={() => navigate('/shop/create')}>
			<img src={MedLogo} alt='MedLogo' />
			<span>E-Pharmacy</span>
		</div>
	)
}

export default LogoType
