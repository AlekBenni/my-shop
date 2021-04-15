
import { ProductType } from "./productReducer"

const initState:InitStateType = {
    cart: []
}

type InitStateType = {
    cart: Array<ProductType>
}

export const Cart = (state:InitStateType = initState, action:ActionType) => {
    switch(action.type){
        case 'ADD_TO_CART':{
            let stateCopy = {...state}
            stateCopy.cart = [...stateCopy.cart]
            let isExist = stateCopy.cart.find(item => item._id === action.item._id)
            if(!isExist){
            stateCopy.cart.unshift(action.item)                
            }
            return stateCopy
        }
        case 'CLEAR_CART':{
            return {...state, cart : []}
        }
        case 'REMOVE_ITEM':{
            let stateCopy = {...state}
            let filteredItem = stateCopy.cart.filter(item => item._id !== action.id)
            stateCopy.cart = filteredItem
            return stateCopy
        }
        default: return state
    }
}

export const addToCartAC = (item:any) => ({type: 'ADD_TO_CART', item})
type AddToCartType = ReturnType<typeof addToCartAC>

export const clearCartAC = () => ({type: 'CLEAR_CART'})
type ClearCartType = ReturnType<typeof clearCartAC>

export const removeItemAC = (id:string) => ({type: 'REMOVE_ITEM', id})
type RemoveItemType = ReturnType<typeof removeItemAC>

type ActionType = AddToCartType & ClearCartType & RemoveItemType