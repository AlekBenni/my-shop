import React from 'react'
import s from "./products.module.css"
import { ProductType } from '../../../redux/productReducer'
import {NavLink} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {changeActivePageAC} from '../../../redux/serviceReducer'
import {addToCartAC} from '../../../redux/cartReducer'

type PropsType = {
    products: Array<ProductType>
}

function Products(props:PropsType) {

    const dispatch = useDispatch()

    dispatch(changeActivePageAC(4)) 

    const weaponProduct = props.products.filter((item:ProductType) => item.category === "weapon")
    const sortWeaponProduct = weaponProduct.sort((a,b) => a.ratting > b.ratting ? -1 : 1)
    const resultWeaponProduct = sortWeaponProduct.slice(0, 4)

    const tourismProduct = props.products.filter((item:ProductType) => item.category === "tourism")
    const sortTouristProduct = tourismProduct.sort((a,b) => a.ratting > b.ratting ? -1 : 1)
    const resultTouristProduct = sortTouristProduct.slice(0, 4)

    const swimProduct = props.products.filter((item:ProductType) => item.category === "swim")
    const sortSwimProduct = swimProduct.sort((a,b) => a.ratting > b.ratting ? -1 : 1)
    const resultSwimProduct = sortSwimProduct.slice(0, 4)

    const addItem = (item:ProductType) => {
        dispatch(addToCartAC(item))
    }

    const resultWeapon = resultWeaponProduct.map((item:ProductType, index:number) => {
        return(
            <div key={index} className="col-3 mb-3">         
                <div className={s.wrapper}>
                    <div style={{backgroundImage: `url(${item.img})`, width: '100%', height: '200px', backgroundSize: 'contain', backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>  
                    {console.log(item.img)}
                    <h5>{item.name}</h5>
                    <div className={s.desc_wrapper}><span>Цена</span><span>{item.price} Руб</span></div>
                    <div className={s.desc_wrapper}><span>Рейтинг</span><span>{item.ratting}</span></div>
                    <div className={s.btn_wrapper}>
                    <button className={s.btn} onClick={() => addItem(item)} >Купить</button>
                        <NavLink to={`/product/${item.name}`} className={s.btn__nav}>Смотреть</NavLink>
                    </div>                    
                </div>               
            </div>
        )
    })

    const resultTourist = resultTouristProduct.map((item:ProductType, index:number) => {
        return(
            <div key={index} className="col-3 mb-3">         
                <div className={s.wrapper}>
                    <img className={s.img} src={item.img} alt=""/>
                    {console.log(item.img)}
                    <h5>{item.name}</h5>
                    <div className={s.desc_wrapper}><span>Цена</span><span>{item.price} Руб</span></div>
                    <div className={s.desc_wrapper}><span>Рейтинг</span><span>{item.ratting}</span></div>
                    <div className={s.btn_wrapper}>
                    <button className={s.btn} onClick={() => addItem(item)} >Купить</button>
                        <NavLink to={`/product/${item.name}`} className={s.btn__nav}>Смотреть</NavLink>
                    </div>                    
                </div>               
            </div>
        )
    })

    const resultSwim = resultSwimProduct.map((item:ProductType, index:number) => {
        return(
            <div key={index} className="col-3">         
                <div className={s.wrapper}>
                    <img className={s.img} src={item.img} alt=""/>
                    {console.log(item.img)}
                    <h5>{item.name}</h5>
                    <div className={s.desc_wrapper}><span>Цена</span><span>{item.price} Руб</span></div>
                    <div className={s.desc_wrapper}><span>Рейтинг</span><span>{item.ratting}</span></div>
                    <div className={s.btn_wrapper}>
                    <button className={s.btn} onClick={() => addItem(item)} >Купить</button>
                        <NavLink to={`/product/${item.name}`} className={s.btn__nav}>Смотреть</NavLink>
                    </div>                    
                </div>               
            </div>
        )
    })

    return (
        <div>
            <h3 className={s.title}>Самые крутые пушки:</h3>
            <div className="row">
                {resultWeapon}
            </div>

            <h3 className={s.title__margin}>Лучшие туристический товары:</h3>
            <div className="row">
                {resultTourist}
            </div>

            <h3 className={s.title__margin}>Лучшие лодки:</h3>
            <div className="row">
                {resultSwim}
            </div>
            
        </div>
    )
}

export default Products
