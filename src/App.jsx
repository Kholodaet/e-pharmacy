import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { refreshThunk } from './redux/User/operations'
import { Loader } from './shared/components/Loader'
import { ROUTES } from './config/routes'
import { selectIsRefreshing } from './redux/User/selectors'
import './App.scss'
import { PrivateRoute, PublicRoute } from './HOC'

const ShopPage = lazy(() => import('./pages/ShopPage'))
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const SharedLayout = lazy(() => import('./shared/components/SharedLayout/SharedLayout'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const CreateShopPage = lazy(() => import('./pages/CreateShopPage/CreateShopPage'))
const EditShopPage = lazy(() => import('./pages/EditShopPage/EditShopPage'))
const AllDrugsPage = lazy(() => import('./pages/AllDrugsPage/AllDrugsPage'))
const CardMyShop = lazy(() => import('./modules/shop/components/CardMyShop/CardMyShop'))
const MedicinePage = lazy(() => import('./pages/MedicinePage/MedicinePage'))
const Description = lazy(() => import('./modules/medicine/DetailsCard/Description'))
const Reviews = lazy(() => import('./modules/medicine/DetailsCard/Reviews'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))

function App() {
	const dispatch = useDispatch()
	const isRefresh = useSelector(selectIsRefreshing)
	const { pathname } = useLocation()

	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [pathname])

	return isRefresh ? (
		<Loader />
	) : (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route
					path={ROUTES.LOGIN}
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path={ROUTES.REGISTER}
					element={
						<PublicRoute>
							<RegisterPage />
						</PublicRoute>
					}
				/>

				<Route
					path='/'
					element={
						<PrivateRoute>
							<SharedLayout />
						</PrivateRoute>
					}
				>
					<Route path={ROUTES.CREATE} element={<CreateShopPage />} />
					<Route path={ROUTES.UPDATE} element={<EditShopPage />} />
					<Route path={ROUTES.SHOP} element={<ShopPage />}>
						<Route index element={<AllDrugsPage />} />
						<Route path={ROUTES.PRODUCT} element={<CardMyShop />} />
					</Route>
					<Route path={ROUTES.MEDICINE} element={<MedicinePage />}>
						<Route index element={<Description />} />
						<Route path={ROUTES.DESCRIPTION} element={<Description />} />
						<Route path={ROUTES.REVIEWS} element={<Reviews />} />
					</Route>
					<Route path={ROUTES.STATISTICS} element={<StatisticsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
				<Route path='*' element={<Navigate to={ROUTES.CREATE} />} />
			</Routes>
		</Suspense>
	)
}

export default App
