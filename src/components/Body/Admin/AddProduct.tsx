import React from 'react'
import s from './admin.module.css'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import { addProductTC } from '../../../actions/ProductActions'

type ErrorType = {
    name?: string
    category?: string
    desc?: string
    img?: string
    price?: any
    ratting?: any
}

function AddProduct() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            name: "",
            category: "",
            desc: "",
            img: "",
            price: 0,
            ratting: 0
        },onSubmit: values => {
            dispatch(addProductTC(values.name, values.category, values.desc, values.img, values.price, values.ratting))
            values.name = ""
            values.category = ""
            values.desc = ""
            values.img = ""
            values.price = 0 
            values.ratting = 0
        },validate: values => {

            let error:ErrorType = {}

            if(!values.name){
                error.name = 'Name is Required!'
            }
            if(!values.category){
                error.category = 'Category is Required!'
            }
            if(!values.desc){
                error.desc = 'Description is Required!'
            }
            if(!values.img){
                error.img = 'Image is Required!'
            }
            if(!values.price){
                error.price = 'Price is Required!'
            }
            if(!values.ratting){
                error.ratting = 'Ratting is Required!'
            }
            return error
        }
    })

    return (
    <div className={s.add__product}>
        <form onSubmit={formik.handleSubmit}>

        <div className={s.input__wrapper}>
            <input id="name" name="name" placeholder="Введите название"
            value={formik.values.name} onChange={formik.handleChange} 
            type="text" />
        </div>

        {formik.touched.name && formik.errors.name ? <div className={s.redBlock}>{formik.errors.name}</div> : null}

        <div className={s.input__wrapper}>
                    <select name="category" id="category"
                    value={formik.values.category} onChange={formik.handleChange} 
                    >
                        <option selected>Выберите категорию</option>
                        <option value="weapon">weapon</option>
                        <option value="tourism">tourism</option>
                        <option value="swim">swim</option>
                    </select>
                    </div>

        {formik.touched.category && formik.errors.category ? <div className={s.redBlock}>{formik.errors.category}</div> : null}

        <div className={s.input__wrapper}>
            <input
            id="desc" name="desc" placeholder="Введите описание"
            value={formik.values.desc} onChange={formik.handleChange} 
            type="text" />
        </div>

        {formik.touched.desc && formik.errors.desc ? <div className={s.redBlock}>{formik.errors.desc}</div> : null}

        <div className={s.input__wrapper}>
            <input
            id="img" name="img" placeholder="Введите ссылку на картинку"
            value={formik.values.img} onChange={formik.handleChange} 
            type="text" />
        </div>

        {formik.touched.img && formik.errors.img ? <div className={s.redBlock}>{formik.errors.img}</div> : null}

        <div className={s.input__wrapper}>
            <input
            id="price" name="price" placeholder="Введите цену"
            value={formik.values.price} onChange={formik.handleChange} 
            type="number" />
        </div>

        {formik.touched.price && formik.errors.price ? <div className={s.redBlock}>{formik.errors.price}</div> : null}

        <div className={s.input__wrapper}>
            <input
            id="ratting" name="ratting" placeholder="Установите рейтинг"
            value={formik.values.ratting} onChange={formik.handleChange} 
            type="number" />
        </div>

        {formik.touched.ratting && formik.errors.ratting ? <div className={s.redBlock}>{formik.errors.ratting}</div> : null}

        <div className={s.admin__btnWrapper}><button type="submit">Добавить товар</button></div>
        </form>
    </div>
    )
}

export default AddProduct
