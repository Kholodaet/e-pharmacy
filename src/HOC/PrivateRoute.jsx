import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/User/selectors'
import { ROUTES } from '../config/routes'

const PrivateRoute = ({ children }) => {
	const location = useLocation()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return isLoggedIn ? children : <Navigate to={ROUTES.LOGIN} state={{ from: location }} />
}

export default PrivateRoute
