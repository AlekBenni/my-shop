import {login} from '../actions/AuthActions'
import {Dispatch} from 'redux'
import { setServiceMessageAC } from './serviceReducer'

const initState:InitStateType = {
    currentUser: {},
    isAuth: false
}

type InitStateType = {
    currentUser: any
    isAuth: boolean
}

type ActionType = any

export const AuthReducer = (state:InitStateType = initState, action:ActionType) => {
    switch(action.type){
        case 'SET_USER':{
            return {...state, currentUser : action.user, isAuth: true}
        }
        case 'LOGOUT':{
            localStorage.removeItem('token')
            return {...state, currentUser : {}, isAuth : false}
        }
    default: return state
    }
}

export const setUserAC = (user:any) => ({type: 'SET_USER', user})
export const logoutAC = () => ({type:'LOGOUT'})

export const setUserTC = (email:string, password:string) => (dispatch:Dispatch) => {   
    login(email, password)
    .then((response:any) => {  
        dispatch(setUserAC(response.data.user))
        localStorage.setItem('token', response.data.token)
        dispatch(setServiceMessageAC("Вы успешно вошли!"))
    })
    .catch((err) => {
        alert("Something wron in LOGIN!")
    })
}