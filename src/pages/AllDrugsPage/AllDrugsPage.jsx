import CardShop from '@modules/shop/components/CardShop/CardShop'
import FilterMedicine from '@modules/shop/components/FilterMedicine/FilterMedicine'

const AllDrugsPage = () => {
	return (
		<>
			<FilterMedicine />
			<CardShop />
		</>
	)
}

export default AllDrugsPage
