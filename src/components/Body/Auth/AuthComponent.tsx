import React from 'react'
import s from './auth.module.css'
import {useDispatch} from 'react-redux'
import { setUserTC } from '../../../redux/authReducer'
import {useFormik} from 'formik'

type PropsType = {
    flag: (value:string) => void
}

type ErrorType = {
    email? : string
    password? : string
}

function AuthComponent(props:PropsType) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:'admin@mail.ru',
            password:'123'
        }, onSubmit: values => {
            dispatch(setUserTC(values.email, values.password))
        }, validate: values => {
            let error:ErrorType = {}

            if(!values.email){
                error.email = 'Email is Required!'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                error.email = 'Email is invalid!'
            }

            if(!values.password){
                error.password = "Password is Required!"
            }

            return error
        }
    })

    return (
        <div className={s.wrapper}>
        <h5>Авторизуйтесь</h5>

        <form onSubmit={formik.handleSubmit}>
       <div className={s.input_wrapper}>
          <input id="email" name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Введите Емайл" className={s.input} type="text"/>           
       </div>
       {formik.touched.email && formik.errors.email ? <div className={s.redBlock}>{formik.errors.email}</div> : null}
       
       <div className={s.input_wrapper}>
          <input id="password" name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Введите пароль" className={s.input} type="text"/> 
       </div>
       {formik.touched.password && formik.errors.password ? <div className={s.redBlock}>{formik.errors.password}</div> : null}

       <div className={s.send_wrapper}>
              <button type="submit">Войти</button>
       </div>
       </form>

       <div className={s.btn_wrapper}>
           <span>Нет аккаунта?</span>
           <button onClick={() => props.flag("reg")} className={s.btn}>Регистрация</button>
       </div>
       
   </div>   
    )
}

export default AuthComponent
