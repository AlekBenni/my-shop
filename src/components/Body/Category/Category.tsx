import React from 'react'
import s from './category.module.css'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../../redux/store'

function Category() {

    const activePage = useSelector((state:RootStateType) => state.service.activePage)

    let category = [{name: "Стреляй", path: "/weapon", page: 1},
    {name: "Ходи", path: "/tourism", page: 2}, 
    {name: "Плыви", path: "/swim", page: 3}]
    let result = category.map((item, index) => {
        return(
            <NavLink key={index}
            to={item.path} className={activePage === item.page ? s.btnActive : s.btn}>{item.name}</NavLink>
        )
    })

    return (
        <div className={s.wrapper}>
            {result}
        </div>
    )
}

export default Category
