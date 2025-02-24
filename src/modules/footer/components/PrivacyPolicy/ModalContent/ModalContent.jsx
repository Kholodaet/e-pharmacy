import CloseButton from '@shared/components/CloseButton'
import styles from './ModalContent.module.scss'

const ModalContent = ({ title, content, onClose }) => {
	return (
		<div className={styles.modalContent}>
			<CloseButton onClose={onClose} />
			<h2>{title}</h2>
			{content.map(item => (
				<span key={item._id}>{item.text}</span>
			))}
		</div>
	)
}

export default ModalContent
