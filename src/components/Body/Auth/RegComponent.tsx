import React from 'react'
import s from './auth.module.css'
import { createUser } from '../../../actions/AuthActions'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'

type PropsType = {
    flag: (value:string) => void
}

type ErrorType = {
    name?: string
    email?: string
    password?: string
    avatar?: string
}

function RegComponent(props: PropsType) {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            avatar: ''
        },onSubmit: values => {
            dispatch(createUser(values.name, values.email, values.password, values.avatar))
        },validate: values => {
            let error:ErrorType = {}

            if(!values.name){
                error.name = "Name is Required!"
            }

            if(!values.email){
                error.email = 'Email is Required!'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                error.email = 'Email is invalid!'
            }

            if(!values.password){
                error.password = "Password is Required!"
            }

            if(!values.avatar){
                error.avatar = "Avatar is Required!"
            }
            return error            
        }
    })

    return (
        <div className={s.wrapper}>
        <h5>Зарегистрируйтесь</h5>
        <form onSubmit={formik.handleSubmit}>
     <div className={s.input_wrapper}>
        <input id="name" name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Введите имя" className={s.input} type="text"/> 
     </div>
     {formik.touched.email && formik.errors.name ? <div className={s.redBlock}>{formik.errors.name}</div> : null}
     
     <div className={s.input_wrapper}>
        <input id="email" name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Введите email" className={s.input} type="text"/> 
     </div>
     {formik.touched.email && formik.errors.email ? <div className={s.redBlock}>{formik.errors.email}</div> : null}

     <div className={s.input_wrapper}>
        <input id="password" name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Введите пароль" className={s.input} type="text"/> 
     </div>
     {formik.touched.email && formik.errors.password ? <div className={s.redBlock}>{formik.errors.password}</div> : null}
     
     <div className={s.input_wrapper}>
        <input id="avatar" name="avatar"
        value={formik.values.avatar}
        onChange={formik.handleChange}
        placeholder="Введите ссылку на аву" className={s.input} type="text"/> 
     </div>
     {formik.touched.email && formik.errors.avatar ? <div className={s.redBlock}>{formik.errors.avatar}</div> : null}

    <div className={s.send_wrapper}>
       <button type="submit">Регистрация</button>
    </div>
    </form>

     <div className={s.btn_wrapper}>
         <span>Есть аккаунт?</span>
         <button onClick={() => props.flag("auth")} className={s.btn}>Авторизация</button>
    </div>                 
</div>  
    )
}

export default RegComponent
