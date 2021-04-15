import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logoutAC } from '../../../redux/authReducer'
import { RootStateType } from '../../../redux/store'
import s from './userPanel.module.css'
import {NavLink} from 'react-router-dom'
import { setServiceMessageAC } from '../../../redux/serviceReducer'

function UserPanel() {
    const dispatch = useDispatch()
    const user = useSelector((state:RootStateType) => state.auth.currentUser) 
    
    const exitActions = () => {
        dispatch(logoutAC())
        dispatch(setServiceMessageAC("Вы успешно вышли!"))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title_wrapper}><h5>Здравствуйте</h5></div>    
            <div className={s.inner_wrapper}>
                <img src={user.avatar} className={s.entityUser_photo} alt="" />
                <h5 className={s.entityUser_name}>{user.name}</h5>
            </div> 
            <div className={s.inner_wrapper_last}>
            <button className={s.btn_exit} onClick={() => exitActions()}>Выход</button>  
             {user.name === 'Admin' && <NavLink to="/admin" className={s.btn_admin} >Админка</NavLink>}    
            
            </div> 
        </div>
    )
}

export default UserPanel
