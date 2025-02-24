import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { loginThunk } from '@redux/User/operations'
import { loginSchema } from './helpers/loginSchema'
import styles from './SigninForm.module.scss'

const SigninForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const { email, password } = location.state || {}

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	})

	const submit = data => {
		dispatch(loginThunk(data))
			.unwrap()
			.then(() => {
				toast.success('User logged in successfully')
				navigate('/shop/create', { replace: true })
			})
			.catch(() => {
				toast.error('Something went wrong. Please try again.')
			})
		reset()
	}
	return (
		<form className={styles.formBox} onSubmit={handleSubmit(submit)}>
			<div>
				<input
					placeholder='Email address'
					name='email'
					type='email'
					defaultValue={email || ''}
					{...register('email')}
				/>
				{errors.email && <span>{errors.email.message}</span>}
			</div>
			<div>
				<input
					placeholder='Password'
					name='password'
					type='password'
					defaultValue={password || ''}
					{...register('password')}
				/>
				{errors.password && <span>{errors.password.message}</span>}
			</div>
			<button type='submit'>Sign in</button>
			<Link to='/register'>Don`t have an account?</Link>
		</form>
	)
}

export default SigninForm
