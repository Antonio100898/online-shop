import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "redux"
import { request, UserType } from "../Api/Api"

interface InitialState {
    users: Array<UserType> | Array<any>
    isFetching: boolean
}
const initialState = {
    users: [],
    isFetching: false
} as InitialState
export type UsersType = Array<UserType>


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAllUsers(state, action: PayloadAction<UsersType>) {
            state.users = action.payload
        },
        setIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        }
    }
})



//ThunkCreators
export const fetchAllUsers = () => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    const response = await request.getAllUsers()
    dispatch(setAllUsers(response.data.sort()))
    dispatch(setIsFetching(false))
}

const { setAllUsers } = usersSlice.actions
export const { setIsFetching } = usersSlice.actions
export default usersSlice.reducer