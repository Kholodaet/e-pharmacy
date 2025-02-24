import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './TitleMedShop.module.scss'
import { fetchShopsById } from '@redux/Shops/operations'
import Loader from '@shared/components/Loader/Loader'
import { selectShop } from '@redux/Shops/selectors'

const TitleMedShop = () => {
	const { shopId } = useParams()
	const dispatch = useDispatch()

	const shop = useSelector(selectShop)

	useEffect(() => {
		if (shopId) {
			dispatch(fetchShopsById(shopId))
		}
	}, [dispatch, shopId])

	if (!shop) {
		return <Loader />
	}

	return (
		<div className={styles.titleMedShop}>
			<h2>{shop && shop.shop}</h2>
			<div className={styles.titleOwner}>
				<p>
					<span>Owner:</span>
					{shop && shop.name}
				</p>
				<div className={styles.mapAdnPhone}>
					<div className={styles.sectorMap}>
						<a
							href={`https://www.google.com/maps/place/${encodeURIComponent(shop && shop.address)}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<SpriteSVG name='map' />
						</a>
						<span className={styles.spanMap}>{shop && shop.address}</span>
					</div>
					<div className={styles.sectorMap}>
						<a href={`tel:${shop && shop.phone}`}>
							<SpriteSVG name='phone' />
						</a>
						<span className={styles.spanMap}>{shop && shop.phone}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TitleMedShop
