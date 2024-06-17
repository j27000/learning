

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState:
    {
        cartList: [],
        total: 0
    },
    reducers:
    {
        add(state, action) {
            console.log(action.payload)
            const updatedList = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            return { ...state, total: total, cartList: updatedList };

        },
        remove(state, action) {
            console.log(action.payload)
            const updatedList = state.cartList.filter((current) => (action.payload.id !== current.id))
            const total = state.total - action.payload.price;
            return { ...state, total: total, cartList: updatedList };

        }

    }
});
export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
