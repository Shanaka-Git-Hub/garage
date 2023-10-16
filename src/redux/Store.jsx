import { configureStore } from "@reduxjs/toolkit";
import State from "./State";

export const store=configureStore({
    reducer:{
        status:State
    }
})