import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ProductType } from '../../../redux/productReducer'
import { RootStateType } from '../../../redux/store'
import s from './admin.module.css'
import { deleteProductTC, updateProductTC } from '../../../actions/ProductActions'
import { ChangeEvent } from 'react'

type PropsType = {
    product: string
}

function EditProduct(props:PropsType) {

    const dispatch = useDispatch()

    const allProducts = useSelector((state:RootStateType) => state.product.products)

    const result = allProducts.filter((item:ProductType) => item.name === props.product)
    console.log(result)

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState("")
    const [ratting, setRatting] = useState("")

    const changeProduct = (id:string) => {
       
            dispatch(updateProductTC(
                id, name, category, desc, img,
                Number(price), Number(ratting)))
            }  
    
    return (
        <div>
            <hr/>            
            {result.map((item:ProductType, index:number) => {
                return(
                    <div className={s.add__product}>
           
                    <div className={s.input__wrapper}>
                        <input id="name" name="name" placeholder={item.name}
                        value={name} onChange={(e) => setName(e.currentTarget.value)} 
                        type="text" />
                    </div>
            
                    <div className={s.input__wrapper}>
                    <select name="category" id="category"
                    value={category} onChange={(e) => setCategory(e.currentTarget.value)} 
                    >
                        <option selected>Выберите категорию</option>
                        <option value="weapon">weapon</option>
                        <option value="tourism">tourism</option>
                        <option value="swim">swim</option>
                    </select>
                    </div>

                    <div className={s.input__wrapper}>
                        <input id="name" name="name" placeholder={item.desc}
                        value={desc} onChange={(e) => setDesc(e.currentTarget.value)} 
                        type="text" />
                    </div>

                    <div className={s.input__wrapper}>
                        <input id="name" name="name" placeholder={item.img}
                        value={img} onChange={(e) => setImg(e.currentTarget.value)} 
                        type="text" />
                    </div>

                    <div className={s.input__wrapper}>
                        <input id="name" name="name" placeholder={String(item.price)}
                        value={price} onChange={(e:ChangeEvent<HTMLInputElement>) => setPrice(e.currentTarget.value)} 
                        type="number" />
                    </div>

                    <div className={s.input__wrapper}>
                        <input id="name" name="name" placeholder={String(item.ratting)}
                        value={ratting} onChange={(e:ChangeEvent<HTMLInputElement>) => setRatting(e.currentTarget.value)} 
                        type="number" />
                    </div>
            
                  <div className={s.admin__editProduct}>
                        <button onClick={() => changeProduct(item._id)}
                        type="submit">Изменить товар</button>
                        <button onClick={() => dispatch(deleteProductTC(item._id))}
                        type="submit" className={s.btn__red}>Удалить товар</button>
                        </div>
                </div>
                )
            })}
        </div>
    )
}

export default EditProduct
