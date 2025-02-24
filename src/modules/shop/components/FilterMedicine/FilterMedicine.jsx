import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCategories } from '@redux/Products/selectors'
import { fetchCategoriesProducts, fetchFilteredProducts } from '@redux/Products/operations'
import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './FilterMedicine.module.scss'

const FilterMedicine = () => {
	const dispatch = useDispatch()
	const categories = useSelector(selectCategories) ?? []
	const [selectedCategory, setSelectedCategory] = useState('')
	const [valueFilter, setValueFilter] = useState('')

	useEffect(() => {
		dispatch(fetchCategoriesProducts())
	}, [dispatch])

	const onsubmit = e => {
		e.preventDefault()
		const filters = {}
		if (selectedCategory) {
			filters.category = selectedCategory
		}
		if (valueFilter) {
			filters.query = valueFilter
		}
		dispatch(fetchFilteredProducts(filters))
	}

	return (
		<form className={styles.filterSection} onSubmit={onsubmit}>
			<div>
				<select
					id='category'
					className={styles.selectCategory}
					value={selectedCategory}
					onChange={e => setSelectedCategory(e.target.value)}
				>
					<option value=''>Product category</option>
					{Array.isArray(categories) &&
						categories.map(item => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
				</select>
			</div>
			<div className={styles.inputSearch}>
				<input
					value={valueFilter}
					onChange={e => setValueFilter(e.target.value)}
					type='text'
					id='search'
					placeholder='Search medicine'
					className={styles.inputField}
				/>
				<div className={styles.iconInput}>
					<SpriteSVG name='search' />
				</div>
			</div>
			<button className={styles.filterButton}>
				<SpriteSVG name='filter' />
				Filter
			</button>
		</form>
	)
}

export default FilterMedicine
