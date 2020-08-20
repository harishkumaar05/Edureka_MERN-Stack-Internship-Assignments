import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Details from "./Details"
import Header from "./Header"
import Footer from "./Footer"

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route path = "/details" component={Details}></Route>
            <Footer/>
        </BrowserRouter>
    )
}
export default Router