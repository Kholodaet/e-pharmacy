import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'

import App from './App.jsx'
import { persistor, store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >
			<App />
			<ToastContainer 
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				theme="colored"
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			 />
		</BrowserRouter>
		</PersistGate>
	</Provider>
)
