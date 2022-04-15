import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllProducts, request } from "../Api/Api";
import { Dispatch } from "redux"


interface InitialState {
    allProducts: AllProducts | Array<any>
    isFetching: boolean
    category: string
}

const initialState = {
    allProducts: [],
    category: 'allProducts',
    isFetching: false
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
        }
    }
})

//ThunkCreators
export const fetchAllProducts = () => async(dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    const response = await request.getAllProducts()
    dispatch(getAllProducts(response.data))
    dispatch(setIsFetching(false))
}

const {getAllProducts, setIsFetching} = productsSlice.actions
export const {setCategory} = productsSlice.actions

export default productsSlice.reducer