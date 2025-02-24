import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/adminConfig';

export const fetchPrivatePolicy = createAsyncThunk('privatePolicy/fetchPrivatePolicy', async (_, thunkAPI) => {
  try {
    const { data } = await API.get('/policy/privacy-policy')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const fetchPublicTerms = createAsyncThunk('privatePolicy/fetchPublicTerms', async (_, thunkAPI) => {
  try {
    const { data } = await API.get('/policy/terms-and-conditions')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})