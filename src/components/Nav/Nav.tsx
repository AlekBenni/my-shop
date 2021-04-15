import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './nav.module.css'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../redux/store'

function Nav() {

    const activePage = useSelector((state:RootStateType) => state.service.activePage)

    return (
        <div className={s.nav_wrapper} >

            <div className={s.nav}>
                <ul>
                    <li>
                        <a className={activePage === 4 ? s.active : ''} href="/">Главная</a>
                    </li>
                    <li>
                        <NavLink to="/delivery" className={activePage === 5 ? s.active : ''} aria-current="page" >Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment" className={activePage === 6 ? s.active : ''} >Оплата</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={activePage === 7 ? s.active : ''}>Контакты</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Nav
