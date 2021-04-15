import React from 'react'
import s from './footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.copy_container}>
                Made with <i className="fas fa-heart"></i> by Alek Benni
            </div>
        </div>
    )
}

export default Footer
