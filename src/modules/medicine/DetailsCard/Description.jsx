import { useSelector } from 'react-redux'

import { selectOneProduct } from '@redux/Products/selectors'
import Loader from '@shared/components/Loader/Loader'
import styles from './Description.module.scss'

const Description = () => {
	const oneProduct = useSelector(selectOneProduct)
	const defaultMessage =
		'No description has been provided yet. Please add some details or context to better understand this section.'

	return (
		<>
			{oneProduct ? (
				<div className={styles.descriptionBox}>
					<h4> {oneProduct?.suppliers}</h4>
					<p>{oneProduct?.description || defaultMessage}</p>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
}

export default Description
