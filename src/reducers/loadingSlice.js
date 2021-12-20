import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isShow: false
  },
  reducers: {
    showLoading: state => {
      state.isShow = true;
    },
    hideLoading: state => {
      state.isShow = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { showLoading, hideLoading } = loadingSlice.actions

export default loadingSlice.reducer