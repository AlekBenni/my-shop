import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setProductsTC} from './actions/ProductActions'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import RouteComponent from './components/Body/RouteComponent/RouteComponent'
import Footer from './components/Footer/Footer'
import { auth } from './actions/AuthActions';
import Service from './components/ServiceComponents/Service';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProductsTC())
    dispatch(auth())
  },[dispatch])


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Nav/>
      <RouteComponent/>
      <Footer/>
      <Service/>
      </BrowserRouter>
    </div>
  );
}

export default App;
