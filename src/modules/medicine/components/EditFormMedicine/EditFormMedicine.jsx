import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { editProductToShopThunk } from '@redux/ShopProducts/operations'
import { validationEditMedicineSchema } from './helpers/validationEditMedicineSchema'
import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './EditFormMedicine.module.scss'
import twoPills from '@assets/icons/twoPills.png'
import ModalButton from '../ModalButton/ModalButton'
import CloseButton from '@shared/components/CloseButton/CloseButton'

const EditFormMedicine = ({ medicine, onClose }) => {
	const dispatch = useDispatch()
	const { shopId } = useParams()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(validationEditMedicineSchema),
		defaultValues: medicine,
	})

	const submit = data => {
		if (Object.keys(data).length === 0) {
			console.log('No changes to update')
			return
		}

		const formData = new FormData()
		for (const [key, value] of Object.entries(data)) {
			if (key === 'photo' && value && value.length > 0) {
				formData.append(key, value[0])
			} else if (value !== undefined && value !== null) {
				formData.append(key, value)
			}
		}
		console.log('FormData entries:', [...formData.entries()])

		dispatch(editProductToShopThunk({ shopId, productId: medicine._id, updateMedicine: formData }))
			.then(() => {
				onClose()
			})
			.catch(err => {
				console.error('Error:', err.message)
			})
	}
	return (
		<form className={styles.editFormMedicine} onSubmit={handleSubmit(submit)}>
			<CloseButton onClose={onClose} />
			<h2>Edit medicine</h2>
			<div className={styles.editImageBox}>
				<label>
					<img src={twoPills} alt='twoPills' />
					<div>
						<SpriteSVG name='upload' />
						Upload image
					</div>
					<input type='file' accept='image/*' style={{ display: 'none' }} {...register('photo')} />
				</label>
				{errors.image && <span>{errors.image.message}</span>}
			</div>
			<div className={styles.inputBox}>
				<div className={styles.editInputBox}>
					<label htmlFor='name'>Medicine Name</label>
					<input type='text' id='name' placeholder='Enter text' {...register('name')} />
					{errors.name && <span>{errors.name.message}</span>}
				</div>
				<div className={styles.editInputBox}>
					<label htmlFor='price'>Price</label>
					<input type='number' id='price' placeholder='Enter text' {...register('price', { valueAsNumber: true })} />
					{errors.price && <span>{errors.price.message}</span>}
				</div>
				<div className={styles.editInputBox}>
					<label htmlFor='category'>Category</label>
					<input type='text' id='category' placeholder='Enter text' {...register('category')} />
					{errors.category && <span>{errors.category.message}</span>}
				</div>
			</div>
			<div className={styles.editInputBox}>
				<label htmlFor='description'>Description</label>
				<textarea type='text' {...register('description')} id='description' placeholder='Enter text' />
				{errors.description && <span>{errors.description.message}</span>}
			</div>
			<div className={styles.editInputButtonBox}>
				<ModalButton className={styles.submitButton} type='submit'>
					Save medicine
				</ModalButton>
				<ModalButton className={styles.cancelButton} type='reset' onClick={onClose}>
					Cancel
				</ModalButton>
			</div>
		</form>
	)
}

export default EditFormMedicine
