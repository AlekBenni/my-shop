import axios from 'axios'
import {Dispatch} from 'redux'
import {setUserAC} from '../redux/authReducer'
import {setServiceMessageAC} from '../redux/serviceReducer'
const baseUrl = "http://localhost:5000/auth"

export const createUser = (name:string, email:string, password:string, avatar:string) => async(dispatch:Dispatch) => {
    try{
    await axios.post(`${baseUrl}/registration`, {
        name, email, password, avatar
    }).then( (response) => dispatch(setServiceMessageAC("Вы успешно зарегистрировались!")))
    }catch(e){
        alert("Something wrong in Registration!")
    }
}

    //  Логинизация
    export const login = async (email:string, password:string) => {
        try{
            const response = await axios.post(`${baseUrl}/login`, {
                email, password
            })
            return response
        }catch(err){
            alert(err.response.message)
        }
    }
    
        //  Авторизация
    export const auth =  () => {
        return async (dispatch:Dispatch) => {
            try {
                const response = await axios.get(`${baseUrl}/auth`,
                    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
                )
                dispatch(setUserAC(response.data.user))
                localStorage.setItem('token', response.data.token)
            } catch (e) {
                localStorage.removeItem('token')
            }
        }
    }   