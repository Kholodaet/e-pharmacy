import ImgShopMob from '@assets/images/ImgShopMob.svg'
import ImgShopTab from '@assets/images/ImgShopTab.svg'
import ImgShopDesk from '@assets/images/ImgShopDesk.svg'
import useMedia from '@hooks/useMedia'

const ImageShop = () => {
	const { isDesktop, isTablet } = useMedia()

	const selectedShopImg = isDesktop ? ImgShopDesk : isTablet ? ImgShopTab : ImgShopMob

	return <img src={selectedShopImg} alt='ImgShop' />
}

export default ImageShop
