import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { fetchShopsById, updateShopThunk } from '@redux/Shops/operations'
import { selectShop, selectIsStatus } from '@redux/Shops/selectors'
import { schemaEditForm } from './helpers/validationEditSchema'
import styles from './EditShopForm.module.scss'

const EditShopForm = () => {
	const dispatch = useDispatch()
	const { shopId } = useParams()
	const updateStatus = useSelector(selectIsStatus)
	const shop = useSelector(selectShop)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schemaEditForm),
	})
	useEffect(() => {
		if (shopId) {
			dispatch(fetchShopsById(shopId))
		}
	}, [shopId, dispatch])

	useEffect(() => {
		if (shop) {
			reset(shop)
		}
	}, [shop, reset])

	const submit = data => {
		if (!shopId) {
			toast.error('shopId is undefined')
			return
		}
		if (updateStatus) {
			toast.error('Shop is already updated')
			return
		}
		const trimmedData = Object.entries(data).reduce((acc, [key, value]) => {
			if (value?.trim()) {
				acc[key] = value.trim()
			}
			return acc
		}, {})

		dispatch(updateShopThunk({ shopId, updateShop: trimmedData })).then(() => {
			toast.success('Shop updated successfully')
			reset()
		})
	}
	return (
		<form className={styles.editShopForm} onSubmit={handleSubmit(submit)}>
			<div>
				<label htmlFor='shop'>Shop Name</label>
				<input placeholder='Enter text' type='text' id='shop' {...register('shop')} />
				{errors.shop && <span>{errors.shop.message}</span>}
			</div>
			<div>
				<label htmlFor='name'>Shop Owner Name</label>
				<input placeholder='Enter text' type='text' id='name' {...register('name')} />
				{errors.name && <span>{errors.name.message}</span>}
			</div>
			<div>
				<label htmlFor='email'>Email address</label>
				<input placeholder='Enter text' type='text' id='email' {...register('email')} />
				{errors.email && <span>{errors.email.message}</span>}
			</div>
			<div>
				<label htmlFor='phone'>Phone Number</label>
				<input placeholder='Enter text' type='text' id='phone' {...register('phone')} />
				{errors.phone && <span>{errors.phone.message}</span>}
			</div>
			<div>
				<label htmlFor='address'>Street address</label>
				<input placeholder='Enter text' type='text' id='address' {...register('address')} />
				{errors.address && <span>{errors.address.message}</span>}
			</div>
			<div>
				<label htmlFor='city'>City</label>
				<input placeholder='Enter text' type='text' id='city' {...register('city')} />
				{errors.city && <span>{errors.city.message}</span>}
			</div>
			<div>
				<label htmlFor='postal'>Zip / Postal</label>
				<input placeholder='Enter text' type='text' id='postal' {...register('postal')} />
				{errors.postal && <span>{errors.postal.message}</span>}
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input placeholder='Enter text' type='password' id='password' {...register('password')} />
				{errors.password && <span>{errors.password.message}</span>}
			</div>

			<div className={styles.delivery}>
				<p>Has own Delivery System?</p>
				<div className={styles.radioGroup}>
					<input type='radio' name='delivery' id='yes' value='yes' {...register('delivery')} defaultChecked></input>
					<label htmlFor='yes'>Yes</label>
					<input type='radio' name='delivery' id='no' value='no' {...register('delivery')}></input>
					<label htmlFor='no'>No</label>
					{errors.delivery && <span>{errors.delivery.message}</span>}
				</div>
			</div>
			<button>Save</button>
		</form>
	)
}

export default EditShopForm
