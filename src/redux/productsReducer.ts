import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllProducts, request } from "../Api/Api";
import { Dispatch } from "redux"
import { CartItem } from "./cartReducer";


export interface InitialState {
    allProducts: AllProducts | Array<any>
    isFetching: boolean
    category: string
    product: CartItem
}

const initialState = {
    allProducts: [] as Array<any> | AllProducts,
    category: 'allProducts',
    isFetching: false,
    product: {}
} as InitialState

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts(state, action: PayloadAction<AllProducts>) {
            state.allProducts = action.payload
        },
        setIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
        },
        setProduct(state, action: PayloadAction<CartItem>) {
            state.product = action.payload
        }
    }
})

//ThunkCreators
export const fetchAllProducts = () => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    const response = await request.getAllProducts()
    dispatch(getAllProducts(response.data))
    dispatch(setIsFetching(false))
}
export const fetchProduct = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    const response = await request.getSingleProduct(id)
    dispatch(setProduct(response.data))
    dispatch(setIsFetching(false))
}

export const { setProduct, getAllProducts, setIsFetching, setCategory } = productsSlice.actions

export default productsSlice.reducer