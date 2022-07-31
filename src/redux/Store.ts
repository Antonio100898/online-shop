import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunkMiddleWare from "redux-thunk"
import productsReducer from "./productsReducer"
import cartReducer from "./cartReducer"

type RootReducer = typeof rootReducer
export type State = ReturnType<RootReducer>

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//@ts-ignore
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;