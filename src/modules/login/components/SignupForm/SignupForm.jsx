import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import { registrationSchema } from './helpers/registrationSchema'
import { registerThunk } from '@redux/User/operations'
import styles from './SignupForm.module.scss'

function SignupForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(registrationSchema) })

	const submit = data => {
		dispatch(registerThunk(data))
			.unwrap()
			.then(() => {
				toast.success('User created successfully')
				navigate('/login', {
					replace: true,
					state: { email: data.email, password: data.password },
				})
			})
			.catch(() => {
				toast.error('Something went wrong. Please try again.')
			})
		reset()
	}
	return (
		<form className={styles.formBox} onSubmit={handleSubmit(submit)}>
			<div className={styles.inputBox}>
				<div>
					<input placeholder='User Name' type='text' id='username' {...register('username')} />
					{errors.username && <span>{errors.username.message}</span>}
				</div>
				<div>
					<input placeholder='Email address' type='email' id='email' {...register('email')} />
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<div>
					<input placeholder='Phone number' type='tel' id='phone' {...register('phone')} />
					{errors.phone && <span>{errors.phone.message}</span>}
				</div>
				<div>
					<input placeholder='Password' type='password' id='password' {...register('password')} />
					{errors.password && <span>{errors.password.message}</span>}
				</div>
			</div>
			<button>Register</button>
			<Link to='/login'>Already have an account?</Link>
		</form>
	)
}

export default SignupForm
