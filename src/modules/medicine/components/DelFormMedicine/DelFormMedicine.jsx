import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { deleteProductToShopThunk } from '@redux/ShopProducts/operations'
import ModalButton from '../ModalButton/ModalButton'
import styles from './DelFormMedicine.module.scss'
import Pills from '@assets/images/Pills.png'
const DelFormMedicine = ({ medicine, onClose }) => {
	const dispatch = useDispatch()
	const { shopId } = useParams()

	if (!medicine) {
		return null
	}
	const deleteMedicine = () => {
		dispatch(deleteProductToShopThunk({ shopId, productId: medicine._id }))
		onClose()
	}

	return (
		<div className={styles.delFormMedicineBox}>
			<h2>Confirm deletion</h2>
			<p> Are you sure you want to delete this item?</p>
			<div>
				<img src={medicine.photo ? medicine.photo : Pills} alt={medicine.name} />
				<h3>{medicine.name}</h3>
				<span>{medicine.category}</span>
			</div>
			<div className={styles.delButtonBox}>
				<ModalButton className={styles.confirmButton} type='submit' onClick={deleteMedicine}>
					Confirm
				</ModalButton>
				<ModalButton className={styles.cancelButton} type='reset' onClick={onClose}>
					Cancel
				</ModalButton>
			</div>
		</div>
	)
}

export default DelFormMedicine
