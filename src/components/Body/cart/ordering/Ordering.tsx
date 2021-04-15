import React from 'react'
import s from '../ordering/ordering.module.css'

function Ordering() {
    return (
        <div>
            <div className = {s.wrapper__title}> <h4>Введите данные для доставки:</h4> </div>
            <div className={s.form__wrapper}>
                <div className={s.name__wrapper}>
                    <input type="text"
                    placeholder="Введите имя"/>
                    <input type="text"
                    placeholder="Введите фамилию"/>
                </div>
                <textarea
                className={s.address}
                placeholder="Введите полный адрес"
                name="" id="" />
                <input type="text"
                placeholder="Введите индекс" className={s.index}/>
                <select name="" id="" className={s.post}>
                    <option selected value="">Введите способ доставки</option>
                    <option value="">Почта России</option>
                    <option value="">EMS контора</option>
                </select>
                <textarea
                className={s.address}
                placeholder="Комментарий к заказу"
                name="" id="" />
                <div className={s.btn}>
                    <button>Заказать</button>
                </div>
            </div>
        </div>
    )
}

export default Ordering
