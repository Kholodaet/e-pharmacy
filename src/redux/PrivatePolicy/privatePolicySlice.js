import { createSlice } from '@reduxjs/toolkit'
import { fetchPrivatePolicy, fetchPublicTerms } from './operations'
const initialState = {
  privatePolicy: [],
  publicTerms: [],
  isLoading: false,
}

const privatePolicySlice = createSlice({
  name: 'privatePolicy',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPrivatePolicy.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.privatePolicy = payload
      })
      .addCase(fetchPublicTerms.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.publicTerms = payload
      })
  },
})

export const privatePolicyReducer = privatePolicySlice.reducer