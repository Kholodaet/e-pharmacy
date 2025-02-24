import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { userReducer } from './User/userSlice';
import { shopsReducer } from './Shops/shopsSlice'
import {statisticsReducer} from './Statistics/statisticsSlice'
import { productsReducer } from './Products/productsSlice'
import { shopProductsReducer } from './ShopProducts/shopProductsSlice'
import {privatePolicyReducer} from './PrivatePolicy/privatePolicySlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		user: persistReducer(persistConfig, userReducer),
		statistics: statisticsReducer,
		products: productsReducer,
		shops: shopsReducer,
		shopProducts: shopProductsReducer,
    privatePolicy: privatePolicyReducer
	},

	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);