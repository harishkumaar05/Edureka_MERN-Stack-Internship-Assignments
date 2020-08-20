import React from 'react'
import './tabs.css'
 
 var Details_Tab = () => {
   return(

       <div>
         <div className="container position-relative pl-4 pr-5 pl-md-0 pr-md-0" style={{paddingLeft: 0, marginTop: 25, paddingRight: 0, minHeight: 450}}>
  <h1 style={{fontFamily: '"Poppins", sans-serif', color: '#192f60', fontSize: 30}}>The Big Chilli Cakery</h1>
  <div className="position-relative" style={{top: 30}}>
    <ul className="nav nav-tabs" id="myTab">
      <li className="nav-item active">
        <a data-toggle="tab" className="nav-link" href="#overview">Overview</a>
      </li>
      <li className="nav-item">
        <a data-toggle="tab" className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
    <div className="tab-content position-relative" style={{top: 30, fontFamily: '"Poppins", sans-serif', color: '#192f60'}}>
      <div id="overview" className="tab-pane  active">
        <h4>About this place</h4>
        <br />
        <h5>Cuisine</h5>
        <br />
        <h6 style={{fontWeight: 'lighter', fontSize: 15}}>Bakery, Fast Food</h6>
        <br />
        <h5>Average Cost</h5>
        <br />
        <h6 style={{fontWeight: 'lighter', fontSize: 15}}>
          ₹700 for two people (approx.)</h6>
      </div>
      <div id="contact" className="tab-pane">
        <h5 style={{fontSize: 18}}>Phone number</h5>
        <p style={{color: '#f67082'}}>+91 114004566 </p>
        <br />
        <p style={{fontSize: 18, fontWeight: 600}}>The Big Chilli Bakery</p>
        <p style={{fontSize: 16, color: '#636f88'}}>Shop 1, Plot D, Samruddhi Complex, Chincholi,Mumbai-400002, Maharashtra
        </p>
      </div>
    </div>
  </div>
</div>
       </div>
    


   )
 }
 
export default Details_Tab