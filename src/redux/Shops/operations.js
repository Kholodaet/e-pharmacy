import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchShopsById = createAsyncThunk('shops/fetchShopsById', async (shopId, thunkAPI) => {
	try {
		const { data } = await API.get(`/shop/${shopId}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addShopThunk = createAsyncThunk('shops/addNewShop', async (shop, thunkAPI) => {
	try {
		const { data } = await API.post('/shop/create', shop)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const updateShopThunk = createAsyncThunk(
	'shops/updateShop',
	async ({ shopId, updateShop }, { rejectWithValue }) => {
		try {
			const { data } = await API.put(`/shop/${shopId}/update`, updateShop)
			return data
		} catch (error) {
			return rejectWithValue(error.message || 'Something went wrong')
		}
	}
)
