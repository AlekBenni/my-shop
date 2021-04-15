import React, {useState} from 'react'
import s from './products.module.css'

type PropsType = {
    postPerPage: number
    total: number
    paginate: (pageNumber:number) => void
}

function Pagination(props: PropsType) {

    const [activePage, setActivePage] = useState(0)

    const {postPerPage, total, paginate} = props

    let pageNumber = []

    for (let i =1; i <= Math.ceil(total / postPerPage); i++){
        pageNumber.push(i)
    }

    const btnHandler = (page:number, index:number) => {
        paginate(page)
        setActivePage(index)
    }

    return (
        <div>
            <span className={s.pagination__title}>Навигация по странице:</span> 
            {pageNumber.map((page:number, index:number) => {
                return(
                    <button key={index} className={activePage === index ? s.paginate__btnActive : s.paginate__btn} onClick={() => btnHandler(page, index)}>{page}</button>
                )
            })}
        </div>
    )
}

export default Pagination
