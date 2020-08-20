import React from 'react'
import {Link} from 'react-router-dom'
import './Details_Header.css'

const Header = () => {
    return(
        <div className="container-fluid nav-contain-custom">
  <nav className="navbar navbar-expand-sm nav-custom">
    <Link className="navbar-brand logo" to="#">
     <div id="logo-back">
        <p id="logo_text">e!</p>
     </div>
    </Link>
    <button
      className="navbar-toggler tog-cust"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse mr-lg-5" id="navbarSupportedContent">
      <ul className="navbar-nav w-100 ">
      <Link className="ml-1 ml-sm-auto mr-sm-4 my-3" id="Login" to="#">Login</Link>
      </ul>

       
      <button className="btn btn-default btn-custom  my-2 my-sm-0" type="submit">
          Create an account
        </button>
    </div>
  </nav>
  <div></div>
</div>

    )
}
export default Header