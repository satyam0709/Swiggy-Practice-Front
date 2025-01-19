import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({

    // these all are in the different reducer function
    // multiple reducer is reducers
    // reducer : combination of multiple small reducers f

    name: "cart",
    initialState:{
        items : [],
        },
    reducers : {
        addItems:(state , action) =>{

            // the older version of redux

            // state.items.push(action.payload)
            // state.items = [...state.items , action.payload]
            // return state;

            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // still redux toolkit using the same like do the older version of redux in behind the seen using IMMER

            // the new version of redux
            state.items.push(action.payload);
        },
        removeItems:(state , action) => {
            state.items.pop();
        },
        clearCart:(state , action)=>{
            // it is just adding a reference to the state
            // so you have to mute the state
            // state = ["sam"]

            // if you return the new object then it will not work
            // one more way to return empty array
            return {items:[]};

            // so you have to mute the state
            state.items.length = 0; // make array empty
        }
    }
});
export const { addItems , removeItems,clearCart } = cartSlice.actions;
export default cartSlice.reducer;