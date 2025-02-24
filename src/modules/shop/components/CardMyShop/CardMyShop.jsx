import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material'

import styles from './CardMyShop.module.scss'
import { ButtonCard } from '../ButtonCard'
import { fetchShopProducts } from '@redux/ShopProducts/operations'
import { selectShopProducts } from '@redux/ShopProducts/selectors'
import useModal from '@hooks/useModal'
import { EditFormMedicine } from '../../../medicine/components/EditFormMedicine'
import { DelFormMedicine } from '../../../medicine/components/DelFormMedicine'
import Loader from '@shared/components/Loader/Loader'
import { selectCurrentShopPage, selectTotalShopPages } from '@redux/ShopProducts/selectors'
import { setCurrentShopPage } from '@redux/ShopProducts/shopProductsSlice'
import Modal from '@shared/components/Modal/Modal'

const CardMyShop = () => {
	const shopProducts = useSelector(selectShopProducts)
	const currentPage = useSelector(selectCurrentShopPage)
	const totalPages = useSelector(selectTotalShopPages)

	const { shopId } = useParams()
	const dispatch = useDispatch()
	const [isOpen, toggleModal] = useModal()
	const [editToMedicine, setEditToMedicine] = useState(null)
	const [deleteToMedicine, setDeleteToMedicine] = useState(null)
	const [modalType, setModalType] = useState(null)

	const placeholderImage = '/src/assets/images/altImage.png'

	useEffect(() => {
		dispatch(fetchShopProducts(shopId))
	}, [dispatch, shopId, currentPage])

	if (!shopProducts || shopProducts.length === 0) {
		return <p>No products available</p>
	}

	if (!shopProducts) {
		return <Loader />
	}

	const handleEditProduct = product => {
		setEditToMedicine(product)
		setModalType('edit')
		toggleModal()
	}

	const handleDeleteProduct = product => {
		setDeleteToMedicine(product)
		setModalType('delete')
		toggleModal()
	}
	const handlePageChange = (event, page) => {
		dispatch(setCurrentShopPage(page))
	}

	return (
		<section className={styles.cardShopSection}>
			{shopProducts?.map(product => (
				<div key={product._id} className={styles.cardShop}>
					<img src={product.photo ? product.photo : placeholderImage} alt={product.name} className={styles.imgShop} />
					<div className={styles.infoShop}>
						<div className={styles.titleShopBox}>
							<div className={styles.titleBox}>
								<h4 className={styles.titleShop}>{product.name}</h4>
								<p className={styles.priceShop}>${product.price}</p>
							</div>
							<p className={styles.suppliersShop}>{product.category}</p>
						</div>
						<div className={styles.buttonShopBox}>
							<ButtonCard onClick={() => handleEditProduct(product)}>Edit</ButtonCard>
							<ButtonCard isStyle onClick={() => handleDeleteProduct(product)}>
								Delete
							</ButtonCard>
						</div>
					</div>
				</div>
			))}
			<Stack spacing={2} className={styles.paginationBox}>
				<Pagination count={totalPages} page={currentPage} onChange={handlePageChange} className={styles.pagination} />
			</Stack>
			{isOpen && modalType === 'edit' && (
				<Modal onClose={toggleModal}>
					<EditFormMedicine medicine={editToMedicine} onClose={toggleModal} />
				</Modal>
			)}
			{isOpen && modalType === 'delete' && (
				<Modal onClose={toggleModal}>
					<DelFormMedicine onClose={toggleModal} medicine={deleteToMedicine} />
				</Modal>
			)}
		</section>
	)
}

export default CardMyShop
