import { createSlice } from '@reduxjs/toolkit'
import { fetchStatistics } from './operations'
const initialState = {
	counts: {
		productsCount: 0,
		customersCount: 0,
		suppliersCount: 0,
	},
	statisticsCustomer: [],
	statisticsIncomeExpenses: [],
	isLoading: false,
	error: null,
}
const statisticsSlice = createSlice({
	name: 'statistics',
	initialState,
	extraReducers: builder => {
		builder.addCase(fetchStatistics.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.counts = payload.counts
			state.statisticsCustomer = payload.statisticsCustomer
			state.statisticsIncomeExpenses = payload.statisticsIncomeExpenses
		})
		builder.addCase(fetchStatistics.pending, state => {
			state.isLoading = true
		})
		builder.addCase(fetchStatistics.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		})
	},
})

export const statisticsReducer = statisticsSlice.reducer
