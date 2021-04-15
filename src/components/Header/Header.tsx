import React from 'react'
import CartTop from '../Body/cart/CartTop'
import Contact from './Contact'
import s from './header.module.css'


function Header() {
    return (
        <div className={s.header_wrapper}>
            <div className={s.header_logo}>
                <h1>My Shop</h1>
            </div>
            <div className={s.header_info}>
                <Contact/>
                <CartTop/>
            </div>
        </div>
    )
}

export default Header
