import React from 'react'
import {useParams} from 'react-router-dom'
import { ProductType } from '../../../redux/productReducer'
import s from "./products.module.css"
import {addToCartAC} from '../../../redux/cartReducer'
import {useDispatch} from 'react-redux'

type PropsType = {
    products: Array<ProductType>
}

function Product(props:PropsType) {

    const dispatch = useDispatch()

    const goBack = () => {
        window.history.go(-1)
    }

    let {...productId} = useParams()
    //@ts-ignore
    const filteredProduct = props.products.filter((item:ProductType) => item.name === productId.name)

    const addItem = (item:ProductType) => {
        dispatch(addToCartAC(item))
    }

    const resultProduct = filteredProduct.map((item:ProductType) => {
        return (
            <div key={item._id} >               
                <div className={s.wrapper__product}>
                   <div className={s.imgProduct}>
                        <img className={s.img} src={item.img} alt=""/>
                   </div>
                    <div className={s.contentProduct}>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                        <div className={s.desc_wrapper}><span>Цена</span><span>{item.price} Руб</span></div>
                        <div className={s.desc_wrapper}><span>Рейтинг</span><span>{item.ratting}</span></div>   
                    </div>               
                </div>
                <div className={s.goBack}><button onClick={() => goBack() }>Назад</button></div>
               <div className={s.btn__productWrapper}>
                   <button className={s.btn__product} onClick={() => addItem(item)} >Купить</button>
                </div> 
                
            </div>
        )
    })

    return (
        <div>   
            {resultProduct}
        </div>
    )
}

export default Product
