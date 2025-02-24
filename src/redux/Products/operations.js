import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue, getState }) => {
	try {
		const { page, limit } = getState().products
		const { data } = await API.get(`/products?page=${page}&limit=${limit}`)
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
export const fetchCategoriesProducts = createAsyncThunk('products/fetchCategories', async (_, thunkAPI) => {
	try {
		const { data } = await API.get('/products/categories')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const fetchFilteredProducts = createAsyncThunk('products/fetchFilteredProducts', async (filters, thunkAPI) => {
	try {
		const defaultFilters = { page: 1, limit: 8 }
		const combinedFilters = { ...defaultFilters, ...filters }
		const params = new URLSearchParams(combinedFilters)
		const { data } = await API.get(`/products/filters?${params.toString()}`)
		return data
	} catch (error) {
		console.error('Error fetching filtered products:', error)
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const fetchOneProduct = createAsyncThunk('products/fetchOneProduct', async (productId, thunkAPI) => {
	try {
		const { data } = await API.get(`/products/${productId}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const fetchProductsReviews = createAsyncThunk('products/fetchProductsReviews', async (_, thunkAPI) => {
	try {
		const { data } = await API.get(`/reviews`)
		return data.reviews
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
