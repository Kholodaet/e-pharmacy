import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, removeToken, setToken } from '../../config/adminConfig';
import { fetchShopsById } from '../Shops/operations';


export const registerThunk= createAsyncThunk('user/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await API.post('/user/register', credentials)
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
export const loginThunk = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await API.post('/user/login', credentials)
    setToken(data.token);
    
    if (data.shopId) {
      await thunkAPI.dispatch(fetchShopsById(data.shopId));
    }
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const logoutThunk = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.post('/user/logout')
    removeToken();
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const refreshThunk = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().user.token
  if (!savedToken) {
    return thunkAPI.rejectWithValue('No token found')
  }
  try {
    setToken(savedToken);
    const { data } = await API.get('/user/user-info')

    if (data.shopId) {
      await thunkAPI.dispatch(fetchShopsById(data.shopId));
    }
    return data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      thunkAPI.dispatch(logoutThunk());
    }
    return thunkAPI.rejectWithValue(error.message)
  }
})