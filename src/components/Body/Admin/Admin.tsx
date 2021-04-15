import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootStateType } from '../../../redux/store'
import s from './admin.module.css'
import {Redirect} from 'react-router-dom'
import AddProduct from './AddProduct'
import { ProductType } from '../../../redux/productReducer'
import { ChangeEvent } from 'react'
import EditProduct from './EditProduct'
import { changeActivePageAC } from '../../../redux/serviceReducer'

function Admin() {

    const dispatch = useDispatch()

    dispatch(changeActivePageAC(0)) 

    const user = useSelector((state:RootStateType) => state.auth.currentUser)
    const products = useSelector((state:RootStateType) => state.product.products)

    const [product, setProduct] = useState('Its my name')

    if(user.name !== "Admin"){
        return <Redirect to="/" />
    }

    const onChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setProduct(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.admin__top}>
                <div className={s.wrapper__user}>
                    <img src={user.avatar} className={s.admin__ava} alt=""/>
                    <div className={s.admin__name}><h4>{user.name}</h4></div>   
                </div>   
                <div className={s.wrapper__title}><h5>Что вы хотите сделать?</h5></div>         
            </div>
            <div className={s.admin__body}>
                <div className={s.admin__addPost}>
                    <div className={s.wrapper__title_body}><h4>Добавьте товар</h4></div> 

                    <AddProduct/>

                </div>
                <div className={s.admin__changePost}>
                    <div className={s.wrapper__title_body}><h4>Изменить товар</h4></div>

                    <div className={s.input__wrapper}>
                        <select onChange={onChangeSelect} name="" id="" className={s.select__product}>
                            <option selected>Выберите товар</option>
                            {products.map((item:ProductType, index:number) => {
                                return <option className={s.option__product} >{item.name}</option>
                            })}
                        </select>
                    </div>

                    <EditProduct product={product}/>

                </div>
            </div>
        </div>
    )
}

export default Admin
