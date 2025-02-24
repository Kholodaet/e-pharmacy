import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	fetchCategoriesProducts,
	fetchFilteredProducts,
	fetchOneProduct,
	fetchProducts,
	fetchProductsReviews,
} from './operations'

const initialState = {
	products: [],
	reviews: [],
	categories: [],
	filteredProducts: [],
	oneProduct: null,
	isLoading: false,
	error: null,
	page: 1,
	totalPages: 0,
	limit: 8,
	totalItems: '',
}

const productsSlice = createSlice({
	name: 'products',
	initialState,

	reducers: {
		setCurrentPage: (state, { payload }) => {
			state.page = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.fulfilled, (state, { payload }) => {
				console.log('fetchProducts payload:', payload)
				state.isLoading = false
				state.products = payload.products
				state.page = Number(payload.page)
				state.totalPages = Number(payload.pages)
				state.totalItems = payload.total
			})
			.addCase(fetchOneProduct.fulfilled, (state, { payload }) => {
				state.oneProduct = payload
				state.isLoading = false
			})
			.addCase(fetchProductsReviews.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.reviews = payload
			})
			.addCase(fetchCategoriesProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.categories = payload
			})
			.addCase(fetchFilteredProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.filteredProducts = payload.products
				state.page = Number(payload.page)
				state.totalPages = Number(payload.pages)
				state.totalItems = payload.total
			})
			.addMatcher(
				isAnyOf(fetchProducts.pending, fetchCategoriesProducts.pending, fetchFilteredProducts.pending),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					fetchProducts.rejected,
					fetchOneProduct.rejected,
					fetchProductsReviews.rejected,
					fetchCategoriesProducts.rejected,
					fetchFilteredProducts.rejected
				),
				(state, { payload }) => {
					state.isLoading = false
					state.error = payload
				}
			)
	},
})
export const { setCurrentPage } = productsSlice.actions
export const productsReducer = productsSlice.reducer
