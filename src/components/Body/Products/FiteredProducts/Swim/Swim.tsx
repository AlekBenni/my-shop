import React, {useState, ChangeEvent} from 'react'
import { ProductType } from '../../../../../redux/productReducer'
import {NavLink} from 'react-router-dom'
import s from "../../products.module.css"
import Pagination from '../../Pagination'
import {useDispatch} from 'react-redux'
import { changeActivePageAC } from '../../../../../redux/serviceReducer'
import {addToCartAC} from '../../../../../redux/cartReducer'

type PropsType = {
    products: Array<ProductType>
}

function Swim(props:PropsType) {

    const dispatch = useDispatch()

    dispatch(changeActivePageAC(3)) 

    let filteredProducts = props.products.filter((item:ProductType) => item.category === "swim")
  
    const [sortProduct, setSortProduct] = useState(filteredProducts)

    const changeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        if(newValue === "ratting"){
            let sort = sortProduct.sort((a, b) => a.ratting > b.ratting ? -1 : 1)
            setSortProduct([...sort])
        }
        if(newValue === "priceDown"){
            let sort = sortProduct.sort((a, b) => a.price > b.price ? -1 : 1)
            setSortProduct([...sort])
        }
        if(newValue === "priceUp"){
            let sort = sortProduct.sort((a, b) => a.price < b.price ? -1 : 1)
            setSortProduct([...sort])
        }
    }   

    const addItem = (item:ProductType) => {
        dispatch(addToCartAC(item))
    }

    let result = sortProduct.map((item:ProductType) => {
        return(
            <div key={item._id} className="col-3 mb-3">
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

    //  Установить количество постов на странице
    let postPerPage = 8
    //  Установить текущую страницу
    let [currentPage, setCurrentPage] = useState(1)
    //  Получить индекс последнего поста на странице
    let lastIndex = currentPage * postPerPage
    //  Получить индекс первого поста на странице
    let firstIndex = lastIndex - postPerPage

    //  Получить массив постов из начального массива
    let totalPost = result.slice(firstIndex, lastIndex)

    const paginate = (pageNumber:number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div className={s.navigationCategory}>
                <div className={s.search_wrapper}>

                </div>
                <div className={s.sort__wrapper}>
                    <select onChange={changeSelect} className={s.sort__product} id="select">
                        <option selected>Сортируйте товар по:</option>
                        <option value="ratting">По рейтингу</option>
                        <option value="priceDown">По цене (начиная с большой)</option>
                        <option value="priceUp">По цене (начиная с маленькой)</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {totalPost}
            </div>
            <Pagination postPerPage={postPerPage} total={result.length} paginate={paginate} />
        </div>
    )
}

export default Swim
