import {combineReducers, createStore, applyMiddleware, compose} from "redux"
import usersReducer from "./usersReducer"
import thunkMiddleWare from "redux-thunk"
import productsReducer from "./productsReducer"

type RootReducer = typeof rootReducer
export type State = ReturnType<RootReducer>

const rootReducer = combineReducers({
    users: usersReducer,
    products: productsReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//@ts-ignore
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
// @ts-ignore
window._store = store;