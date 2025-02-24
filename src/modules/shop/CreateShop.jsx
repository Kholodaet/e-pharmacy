import { CreateShopForm } from './components/CreateShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'
import '../../styles/_container.scss'

const CreateShop = () => {
	return (
		<section className={styles.shopSection}>
			<div className={styles.titleFormSection}>
				<TitleShop />
				<CreateShopForm />
			</div>
			<ImageShop />
		</section>
	)
}

export default CreateShop
