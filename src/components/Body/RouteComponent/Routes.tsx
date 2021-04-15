import React from 'react'
import {Route} from 'react-router-dom'
import Products from '../Products/Products'
import Delivery from '../../NavComponents/Delivery/Delivery'
import Payment from '../../NavComponents/Payment/Payment'
import Contact from '../../NavComponents/Contact/Contact'
import Weapon from '../Products/FiteredProducts/Weapon/Weapon'
import Tourism from '../Products/FiteredProducts/Tourism/Tourism'
import Swim from '../Products/FiteredProducts/Swim/Swim'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../../redux/store'
import loader from '../../../assets/loader.gif'
import s from './routeComponent.module.css'
import Admin from '../Admin/Admin'
import Product from '../Products/Product'
import Cart from '../cart/cart/Cart'
import Ordering from '../cart/ordering/Ordering'

function Routes() {
    const loading = useSelector((state:RootStateType) => state.product.isLoading)
    const products = useSelector((state:RootStateType) => state.product.products)

    if(!loading){
        return <div className={s.loader_wrapper}>
            <img src={loader} alt=""/>
            <img src={loader} alt=""/>
            <img src={loader} alt=""/>
            </div>
    }

    return (
        <div>
            <Route exact path="/" render={ () => <Products products={products}/> } />
            <Route path="/delivery" render={() => <Delivery/>} />
            <Route path="/payment" render={() => <Payment/> } />
            <Route path="/contact" render={() => <Contact/>} />
            <Route path="/weapon" render={() => <Weapon products={products}/> } />
            <Route path="/tourism" render={() => <Tourism products={products}/>} />
            <Route path="/swim" render={() => <Swim products={products}/>} />   
            <Route path="/admin" render={() => <Admin/>}/>  
            <Route path="/product/:name" render={() => <Product products={products}/>} />  
            <Route path="/cart" render={() => <Cart/>} />    
            <Route path="/ordering" render={() => <Ordering/>} /> 
        </div>
    )
}

export default Routes
