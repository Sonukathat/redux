import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    value:0
}

const addtoCart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1;
        }
    }
})

export const {}=addtoCart.actions;
export default addtoCart.reducer