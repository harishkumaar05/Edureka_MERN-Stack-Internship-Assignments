import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabs.css'

 
 var Details_Tab = () => {
   return(
     <div className="container cust-tab px-sm-0">
       <p style={{fontSize:30}}>The Big Chilli Cakery</p>
       <Tabs>
    <TabList>
      <Tab >Overview</Tab>
      &nbsp;&nbsp;&nbsp;
      <Tab >Contact</Tab>
    </TabList>
 
    <TabPanel>
          <div>
            <br/>
  <h4>About this place</h4>
  <br />
  <h5>Cuisine</h5>
  <br />
  <h6 style={{fontWeight: 'lighter', fontSize: 15}}>Bakery, Fast Food</h6>
  <br />
  <h5>Average Cost</h5>
  <br />
  <h6 style={{fontWeight: 'lighter', fontSize: 15}}>
    ₹700 for two people (approx.)
  </h6>
</div>

    </TabPanel>
    <TabPanel>
   <div>
  <h5 style={{fontSize: 18}}>Phone number</h5>
  <p style={{color: '#f67082'}}>+91 114004566 </p>
  <br />
  <p style={{fontSize: 18, fontWeight: 600}}>The Big Chilli Bakery</p>
  <p style={{fontSize: 16, color: '#636f88'}}>Shop 1, Plot D, Samruddhi Complex, Chincholi,Mumbai-400002, Maharashtra
  </p>
</div>

    </TabPanel>
  </Tabs>
     </div>
   )
 }
export default Details_Tab