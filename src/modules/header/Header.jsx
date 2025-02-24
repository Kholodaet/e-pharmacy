import useMedia from '@hooks/useMedia'
import useModal from '@hooks/useModal'
import { LogoType } from '@shared/components/LogoType'
import Modal from '@shared/components/Modal'
import MobileMenu from '../mobileMenu/MobileMenu'
import { Burger } from './components/Burger'
import { LogoutButton } from './components/LogoutButton'
import styles from './Header.module.scss'
import NavBar from '@shared/components/NavBar/NavBar'

const Header = () => {
	const [isOpen, toggleModal] = useModal()
	const { isDesktop } = useMedia()

	return (
		<header className={styles.header}>
			<LogoType />
			{!isDesktop ? (
				<Burger openModal={toggleModal} />
			) : (
				<>
					<NavBar typeStyle='Header' /> <LogoutButton />
				</>
			)}
			{isOpen && (
				<Modal onClose={toggleModal}>
					<MobileMenu onClose={toggleModal} />
				</Modal>
			)}
		</header>
	)
}

export default Header
