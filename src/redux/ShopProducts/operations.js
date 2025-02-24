import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'
import { toast } from 'react-toastify'

export const fetchShopProducts = createAsyncThunk('shopProducts/fetchShopProducts', async (shopId, { rejectWithValue, getState }) => {
	try {
		const { page, limit } = getState().shopProducts
		const { data } = await API.get(`/shop/${shopId}/product?page=${page}&limit=${limit}`)
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const addProductToShopThunk = createAsyncThunk(
	'shopProducts/addProductToShop',
	async ({ shopId, addMedicine }, thunkAPI) => {
		try {
			const { data } = await API.post(`/shop/${shopId}/product/add`, addMedicine)
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const editProductToShopThunk = createAsyncThunk(
	'shopProducts/editProductToShop',
	async ({ shopId, productId, updateMedicine }, thunkAPI) => {
		try {
			const { data } = await API.put(`/shop/${shopId}/product/${productId}/edit`, updateMedicine)
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const deleteProductToShopThunk = createAsyncThunk(
	'shopProducts/deleteProductToShop',
	async ({ shopId, productId }, thunkAPI) => {
		try {
			const { data } = await API.delete(`/shop/${shopId}/product/${productId}/delete`)
			return data._id
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	},
		{
			condition: (_, { getState }) => {
				const loading = getState().shopProducts.isLoading
				if(loading) {
					toast.info ('You are already loading')
					return false
				}
			}
		}
	
)
