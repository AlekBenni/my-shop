import React from 'react'
import s from './service.module.css'

type PropsType = {
    message: any
}

function Message(props: PropsType) {
    return (
        <div className={s.service__wrapper}>
            {props.message}
        </div>
    )
}

export default Message
