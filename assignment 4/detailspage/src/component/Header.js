import React from 'react'
import {Link}  from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/">Home</Link>
      </li>
      &nbsp;&nbsp;
      <li class="nav-item">
      <Link to="/details">Details</Link>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    )
}
export default Header