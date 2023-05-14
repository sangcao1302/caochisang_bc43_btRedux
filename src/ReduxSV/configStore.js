import { configureStore } from '@reduxjs/toolkit';
import SinhVienReducer from './SinhVienReducer';

export const store=configureStore({
    reducer:{
       sinhVienReducer:SinhVienReducer
    }
})
