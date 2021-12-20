import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import authReducer from './reducers/authSlice';
import loadingReducer from './reducers/loadingSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    loading : loadingReducer
  }
})