import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import { OverlayLoginPage } from './components/OverlayLoginPage'
import WhitePill from '../../assets/icons/WhitePill.svg'
import { LogoType } from '../../shared/components/LogoType'
import { SignupForm } from './components/SignupForm'
import { SigninForm } from './components/SigninForm'

import '../../styles/_container.scss'
import styles from './Login.module.scss'

const Login = () => {
	const location = useLocation()
	const isLoginPage = location.pathname === '/login'

	return (
		<section className={clsx(styles.loginSection, 'container')}>
			<LogoType />
			<div className={styles.loginTablet}>
			<div className={styles.titleSection}>
					<img src={WhitePill} alt='LogoPill' />
					<h1>
						Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us
					</h1>
				</div>
				<div className={styles.formSection}>
				{isLoginPage ? <SigninForm /> : <SignupForm />}
				</div>
			</div>
			<OverlayLoginPage />
		</section>
	)
}

export default Login
