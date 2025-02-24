import { IoCloseSharp } from 'react-icons/io5'

import styles from './CloseButton.module.scss'
const CloseButton = ({onClose}) => {
	return (
		<button className={styles.closeButton} type='button' onClick={onClose}>
			<IoCloseSharp />
		</button>
	)
}

export default CloseButton
