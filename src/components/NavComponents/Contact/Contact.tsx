import React from 'react'
import s from './contact.module.css'
import {useDispatch} from 'react-redux'
import { changeActivePageAC } from '../../../redux/serviceReducer'

function Contact() {

    const dispatch = useDispatch()
    dispatch(changeActivePageAC(7)) 

    return (
        <div className={s.contact__wrapper}>
            <div className={s.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23020.83439527948!2d-48.55055662131254!3d-27.593524555447978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1617629815269!5m2!1sru!2sru" width="400" height="450" style={{border:0}} loading="lazy"></iframe>
            </div>
            <div className={s.contact}>
                <h4>Наш адрес:</h4>
                <p>Praça XV de Novembro, S/N - Centro, Florianópolis - SC, 88010-400, Бразилия</p>
                <h4>Наши телефоны:</h4>
                <p>8 (123) 456 - 78 -90</p>
                <p>8 (123) 456 - 78 -90</p>
                <h4>О нашем магазине:</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
        </div>
    )
}

export default Contact
