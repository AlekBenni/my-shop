import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootStateType } from '../../redux/store'
import {deleteServiceMessageAC} from '../../redux/serviceReducer'
import Message from './Message'

function Service() {
    const dispatch = useDispatch()
    const message = useSelector((state:RootStateType) => state.service.serviceMessage)

    const result = message.map((item:string, index:number) => {
        return(
            <span>{item}</span>
        )})

    const timeout = setTimeout(() => {      
        dispatch(deleteServiceMessageAC())
        clearTimeout(timeout)
    },5000)

    return (
        <div>
            {result.length > 0 && <Message message={result}/> }          
        </div>
    )
}

export default Service
