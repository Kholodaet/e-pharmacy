import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
		phone: '',
		password: '',
	},
	error: '',
	token: '',
	isLoggedIn: false,
	isRefreshing: false,
}
const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.isLoggedIn = true
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, state => {
				state.user = initialState.user
				state.token = initialState.token
				state.isLoggedIn = initialState.isLoggedIn
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user = payload
				state.isLoggedIn = true
				state.isRefreshing = false
				state.error = ''
			})
			.addCase(refreshThunk.pending, state => {
				state.isRefreshing = true
			})
			.addCase(refreshThunk.rejected, state => {
				state.isRefreshing = false
			})
	},
})

export const userReducer = userSlice.reducer
