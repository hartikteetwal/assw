import { Product } from "@/lib/product"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CartState{
    items:Product[]
}

const initialState: CartState = {
    items:[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart :(state,action:PayloadAction<Product>) => {
            state.items.push(action.payload)
        },
        removeToCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item=>item.id !== action.payload)
        },
        updateToCart: (state, action:PayloadAction<Product>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            state.items[index] = action.payload
        }
    }
})

export const { addToCart,removeToCart,updateToCart } = cartSlice.actions
export default cartSlice.reducer