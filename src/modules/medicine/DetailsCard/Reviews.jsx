import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProductsReviews } from '@redux/Products/operations'
import { selectReviews } from '@redux/Products/selectors'
import styles from './Reviews.module.scss'

const Reviews = () => {
	const dispatch = useDispatch()
	const reviews = useSelector(selectReviews)

	useEffect(() => {
		dispatch(fetchProductsReviews())
	}, [dispatch])
	return (
		<ul className={styles.reviewsBox}>
			{reviews.map((review, id) => (
				<li key={id}>
					<h3>{review.name}</h3>
					<p>{review.testimonial}</p>
				</li>
			))}
		</ul>
	)
}

export default Reviews
