import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as apiLogin from "../api/login";
import * as apiUrl from "../api/xhr/backendApi";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const login = createAsyncThunk(
  apiUrl.getUrl("API_LOGIN"),
  async (input, thunkAPI) => {
    try {
      const result = await apiLogin.login(input);

      if(result.data.body){
        localStorage.setItem("user", JSON.stringify(result.data));
      }
      return { user: result.data };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers : {
    logout : (state) => {
      localStorage.clear();
      sessionStorage.clear();
      state.isLoggedIn = false;
      state.user = null;    
    }

  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
})

const { reducer } = authSlice;

export default reducer

export const { logout } = authSlice.actions
