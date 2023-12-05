import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
}

export const LoaderSlice = createSlice({
    name: 'loader',
    initialState, 
    reducers: {
        setLoading : (state, action)=>{
            state.loading =  action.payload;
        },
    }
})

export const { setLoading } = LoaderSlice.actions;
export default LoaderSlice.reducer;