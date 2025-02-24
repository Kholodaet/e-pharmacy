import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/User/selectors'
import { ROUTES } from '../config/routes'

const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const location = useLocation()

	return !isLoggedIn ? children : <Navigate to={location.state?.from?.pathname || ROUTES.CREATE} replace />
}

export default PublicRoute
