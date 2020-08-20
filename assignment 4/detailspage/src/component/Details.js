import React from 'react'
import DetailsHeader from "./Details_Header"
import ImageGallery from './ImageGallery'
import Detailstab from './tabs'


const Details = () => {
    return(
        <div>
            <DetailsHeader/>
            <ImageGallery/>
            <div className="container mt-5 " style={{padding:0,marginTop:10}}>
            <Detailstab/>
            </div>
            
        </div>
    )
}
export default Details