const { configureStore, createReducer } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

// reducer - one big reducer this have multiple reducers

const appStore = configureStore({
    reducer: {
        cart:cartReducer,
    }
});

export default appStore;