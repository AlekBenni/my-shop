import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { clearCartAC, removeItemAC } from '../../../../redux/cartReducer'
import { ProductType } from '../../../../redux/productReducer'
import { RootStateType } from '../../../../redux/store'
import s from "./cart.module.css"
import {changeActivePageAC} from '../../../../redux/serviceReducer'
import { NavLink } from 'react-router-dom'

function Cart() {

    const dispatch = useDispatch()

    dispatch(changeActivePageAC(0)) 

    const cartItem = useSelector((state:RootStateType) => state.cart.cart)

    const removeItem = (id:string) => {
        dispatch(removeItemAC(id))
    }

    const clearCart = () => {
        dispatch(clearCartAC())
    }

    let totalPrice = cartItem.reduce((total, item) => {
        return total + item.price
    },0)

    const resultCart = cartItem.map((item:ProductType) => {
        return(
            <div className={s.wrapper}>
                <img src={item.img} className={s.cartImg} alt=""/>
                <h5>{item.name}</h5>
                <h5>{item.price} Рублей</h5>
                <button onClick={() => removeItem(item._id)}>Удалить</button>
            </div>
        )
    })

    return (
        <div>
            <h4 className={s.title}>Ваши товары:</h4>
            {resultCart}
            <h5 className={s.total}>Иторовая сумма: <span>{totalPrice}</span> рублей</h5>
            <div className={s.cartNav__wrapper}>
            <NavLink to="/ordering" className={s.bay}>Оформить заказ</NavLink>    
            <button className={s.clear} onClick={clearCart}>Очистить корзину</button>
            </div>
        </div>
    )
}

export default Cart
