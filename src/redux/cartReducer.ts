import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isFetching: false,
    total: 0
} as InitialState

interface InitialState {
    items: Array<CartItem>
    isFetching: boolean
    total: number
}
export type CartItem = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        fetchCartItems(state) {
            state.isFetching = true
            if (localStorage.getItem("items") === null) {
                localStorage.setItem("items", JSON.stringify([]))
            } else {
                const items = localStorage.getItem("items") as string
                state.items = JSON.parse(items)
            } state.isFetching = false
        },
        addCartItems(state, action: PayloadAction<CartItem>) {
            state.isFetching = true
            if (localStorage.getItem("items") === null) {
                localStorage.setItem("items", JSON.stringify([]))
                state.items = [...state.items, action.payload]
                localStorage.setItem("items", JSON.stringify(state.items))
            } else {
                state.items = [...state.items, action.payload]
                localStorage.setItem("items", JSON.stringify(state.items))
            } state.isFetching = false
        },
        removeCartItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        setTotal(state) {
            if (state.items.length > 0) {
                let prices = state.items.map(item => item.price)
                let total = prices.reduce((a, b) => a + b)
                state.total = total
                if (localStorage.getItem("total") === null) {
                    localStorage.setItem("total", JSON.stringify(state.total))
                } else {
                    localStorage.setItem("total", JSON.stringify(state.total))
                }
            }

        },
        clearCart(state) {
            state.items = [];
            localStorage.setItem("items", JSON.stringify([]))
        }
    }
})
export const { clearCart, setTotal, removeCartItem, addCartItems, fetchCartItems } = cartSlice.actions
export default cartSlice.reducer