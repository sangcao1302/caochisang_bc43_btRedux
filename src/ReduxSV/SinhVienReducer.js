import { createSlice } from '@reduxjs/toolkit'

const initialState = {maSV:"",phone:"",tenSV:"",email:""

}

const SinhVienReducer = createSlice({
  name: "SinhVienReducer",
  initialState,
  reducers: {
    changeInfo:(state,action)=>{
        let {id,value}=action.payload
            state[id]=value
    }
  }
});

export const {} = SinhVienReducer.actions

export default SinhVienReducer.reducer