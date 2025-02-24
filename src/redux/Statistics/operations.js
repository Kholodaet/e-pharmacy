import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchStatistics = createAsyncThunk('statistics/fetchStatistics', async (_, thunkAPI) => {
	try {
		const { data } = await API.get('/statistics')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
