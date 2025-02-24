import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { schemaAddForm } from './helpers/validationSchema'
import { addShopThunk } from '@redux/Shops/operations'
import styles from './CreateShopForm.module.scss'

const CreateShopForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schemaAddForm),
	})
	const submit = data => {
		dispatch(addShopThunk(data)).unwrap().then((shop) => {
				toast.success('Shop created successfully')
				navigate(`/shop/${shop._id}`, { replace: true })
				reset()
			})
			.catch (error => {
			console.error('Error creating shop:', error);
			toast.error('Failed to create shop. Please try again.');
		})
	}

	return (
		<form className={styles.createShopForm} onSubmit={handleSubmit(submit)}>
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
				<input placeholder='Enter text' type='text' id='password' {...register('password')} />
				{errors.password && <span>{errors.password.message}</span>}
			</div>

			<div className={styles.delivery}>
				<p>Has own Delivery System?</p>
				<div className={styles.radioGroup}>
					<input id='yes' type='radio' name='delivery' value='yes' {...register('delivery')} defaultChecked />
					<label htmlFor='yes'>Yes</label>
					<input id='no' type='radio' name='delivery' value='no' {...register('delivery')} />
					<label htmlFor='no'>No</label>
					{errors.delivery && <span>{errors.delivery.message}</span>}
				</div>
			</div>
			<button>Create account</button>
		</form>
	)
}

export default CreateShopForm
