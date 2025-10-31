import { createSlice } from "@reduxjs/toolkit"

const initialstate ={
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