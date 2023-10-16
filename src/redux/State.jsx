import { createSlice } from "@reduxjs/toolkit";

const stateSlice=createSlice({
    name:'status',
    initialState:false,
    reducers:{
        openNow:(state)=>{
          return state=true
        },
        colseNow:(state)=>{
          return state=false
        }
    }
})
export const {openNow,colseNow}=stateSlice.actions
export default stateSlice.reducer