import { createSlice, current } from "@reduxjs/toolkit";

const stateSlice=createSlice({
    name:'status',
     initialState:''
    ,
    reducers:{
        openNow:(state,action)=>{
          return state=action.payload
        }
    }
})
export const {openNow,colseNow}=stateSlice.actions
export default stateSlice.reducer