import React from 'react'
import './ImageGallery.css'

const imagegallery = () => {
    return (
        <div className="container cust-contain mt-md-5 px-0">
            <div class="col-md mt-md-2 px-0">
                <img id = "image" src="https://cdn.zeplin.io/5ea9214f6ba7e327178817d0/assets/1B167734-C2DA-4476-A73C-341BC905AC5F.png" alt=""/>
                <button type="button" className="btn cust-butt btn-lg">Click to see Image Gallery</button>
            </div>
        </div>
    )
}
 export default imagegallery