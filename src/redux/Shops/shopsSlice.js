import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addShopThunk, fetchShopsById, updateShopThunk } from './operations'

const initialState = {
	shop: {},
	error: null,
	shopId: null,
	isStatus: false,
	isLoading: false,
}

const shopsSlice = createSlice({
	name: 'shops',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchShopsById.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shop = payload
				state.shopId = payload._id
			})
			.addCase(addShopThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shop = payload 
				state.shopId = payload._id
			})
			.addCase(updateShopThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false
				if (state.shop && state.shop._id === payload._id) {
					state.shop = payload  
				}
				state.isStatus = true
			})
			.addMatcher(isAnyOf(fetchShopsById.pending, addShopThunk.pending, updateShopThunk.pending), state => {
				state.isLoading = true
			})
			.addMatcher(
				isAnyOf(fetchShopsById.rejected, addShopThunk.rejected, updateShopThunk.rejected),
				(state, { payload }) => {
					state.isLoading = false
					state.error = payload
				}
			)
	},
})

export const shopsReducer = shopsSlice.reducer
