import { addProductAC, deleteProductAC, updateProductAC } from './../redux/productReducer';
import axios from 'axios'
import {Dispatch} from 'redux'
import { changeLoadingAC, setProductsAC } from '../redux/productReducer'
import { setServiceMessageAC } from '../redux/serviceReducer';
const baseUrl = "http://localhost:5000/products"

export const setProductsTC = () => (dispatch: Dispatch) => {
    dispatch(changeLoadingAC(false))
    axios.get(`${baseUrl}`)
    .then((res) => {
        dispatch(setProductsAC(res.data))
        dispatch(changeLoadingAC(true))
    }).catch((err) => {
        alert(err.message)
    })
}

export const addProductTC = (name: string,  category: string,  desc: string, img: string, price: number, ratting: number) => (dispatch:Dispatch) => {
    axios.post(`${baseUrl}`, {
        name, category, desc, img, price, ratting
    })
    .then((response) => {
        dispatch(addProductAC(response.data))
        dispatch(setServiceMessageAC("Товар успешно добавлен!"))
    }).catch((err) => alert(err.message))
}

export const deleteProductTC = (id:string) => (dispatch:Dispatch) => {
    axios.delete(`${baseUrl}/${id}`)
    .then((response) => {
        dispatch(deleteProductAC(response.data))
        dispatch(setServiceMessageAC("Товар был успешно удален!!"))
    }).catch((err) => {
        console.log(err.message)
    })
}

export const updateProductTC = (id:string, name: string,  category: string,  desc: string, img: string, price: number, ratting: number) => (dispatch:Dispatch) => {
    axios.patch(`${baseUrl}/${id}`, {
        name, category, desc, img, price, ratting
    })
    .then((response) => {
        dispatch(updateProductAC(response.data))
        dispatch(setServiceMessageAC("Товар был успешно изменён!"))
    }).catch((err) => {
        console.log(err.message)
    })
}