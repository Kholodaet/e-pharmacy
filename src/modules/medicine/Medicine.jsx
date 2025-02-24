import { CardOneProduct, DetailsCard } from './DetailsCard'
import styles from './Medicine.module.scss'

const Medicine = () => {
	return (
		<section className={styles.medicineSection}>
			<CardOneProduct />
			<DetailsCard />
		</section>
	)
}

export default Medicine
