import React from 'react'
import Auth from '../Auth/Auth'
import Category from '../Category/Category'
import s from './routeComponent.module.css'
import Routes from './Routes'
import {useSelector} from "react-redux"
import { RootStateType } from '../../../redux/store'
import UserPanel from '../UserPanel/UserPanel'


function RouteComponent() {
    
    const isAuth = useSelector((state:RootStateType) => state.auth.isAuth)

    return (
        <div className={s.wrapper}>
            <div className="row">
                <div className="col-3">
                    <div className={s.sideBar}>
                        {isAuth ? <UserPanel/> : <Auth/>}                    
                        <Category/>
                    </div>
                </div>
                <div className="col-9">
                    <div className={s.body}>
                        <Routes/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteComponent
