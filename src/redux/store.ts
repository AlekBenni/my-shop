import { Cart } from './cartReducer';
import { serviceReducer } from './serviceReducer';
import { AuthReducer } from './authReducer';
import { ProductReducer } from './productReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    product: ProductReducer,
    auth: AuthReducer,
    service: serviceReducer,
    cart: Cart
})

let preloadedState
const cartFromLC = localStorage.getItem("cart")
if(cartFromLC){
    preloadedState = JSON.parse(cartFromLC)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState()))
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store 

