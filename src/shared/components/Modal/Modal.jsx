import { createPortal } from 'react-dom'
import { useEffect } from 'react'

import styles from './Modal.module.scss'

const modalRoot = document.getElementById('modal')

const Modal = ({ children, onClose }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		const handleEscape = event => {
			if (event.code === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('keydown', handleEscape)
		return () => {
			document.body.style.overflow = 'unset'
			window.removeEventListener('keydown', handleEscape)
		}
	}, [onClose])
	return createPortal(
		<div className={styles.modalOverlay} onClick={onBackdropClick}>
			{children}
		</div>,
		modalRoot
	)
}

export default Modal
