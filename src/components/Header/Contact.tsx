import React from 'react'
import s from './header.module.css'

function Contact() {
    return (
        <div className={s.header_contact}>
            <h5>Наши контакты:</h5>
            <span>8 (800) 123-45-56</span>
            <div className={s.social_icons}>
                <a href="http://localhost:3000/">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-vk"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-tiktok"></i>
                </a>           
            </div>
            <a className={s.contact_mail} href="http://localhost:3000/">myshop@mail.ru</a>
        </div>
    )
}

export default Contact
