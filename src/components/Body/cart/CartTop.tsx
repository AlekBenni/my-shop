import React from 'react'
import s from '../../Header/header.module.css'
import {useSelector} from "react-redux"
import { RootStateType } from '../../../redux/store'
import {NavLink} from 'react-router-dom'

function CartTop() {
    const cart = useSelector((state:RootStateType) => state.cart.cart)

    let countItem = cart.length
    let totalPrice = cart.reduce((total, item) => {
        return total + item.price
    }, 0)
    
    return (
        <div className={s.shop_basket}>
        <h5>Товаров в корзине:</h5>
        <div className={s.count_goods}>
            <p>{countItem} <span>шт.</span></p>
            <p>{totalPrice} <span>Руб.</span></p>
        </div>
        <NavLink to="cart" className={s.basket_btn}>Оплатить</NavLink>
    </div>
    )
}

export default CartTop
