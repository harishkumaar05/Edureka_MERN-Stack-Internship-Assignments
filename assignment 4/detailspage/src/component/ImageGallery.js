import React from 'react'
import './ImageGallery.css'

const imagegallery = () => {
    return (
        <div className="container cust-contain mt-md-5 px-0">
            <div class="col-md mt-md-2 px-0">
                <img id = "image" src="https://cdn.zeplin.io/5ea9214f6ba7e327178817d0/assets/1B167734-C2DA-4476-A73C-341BC905AC5F.png" alt=""/>
                <button data-toggle="modal" data-target="#exampleModal" type="button" className="btn cust-butt btn-lg">Click to see Image Gallery</button>
            </div>
            <div className="container pl-3 pl-md-0 pr-3 pr-md-0" style={{padding: 0}}>
  <div className="modal fade modal-fullscreen" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span style={{color: '#ce0505'}} aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{textAlign: 'center'}}>
                <h5 className="head">Waffle</h5>
                <img className="d-block w-100 " src="https://wallpapermemory.com/uploads/346/waffle-background-hd-2560x1600-384897.jpg" alt="First slide" />
              </div>
              <div className="carousel-item" style={{textAlign: 'center'}}>
                <h5 className="head">Burger</h5>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Second slide" />
              </div>
              <div className="carousel-item" style={{textAlign: 'center'}}>
                <h5 className="head">Blackforest Cake</h5>
                <img className="d-block w-100" src="https://eviltwin.kitchen/wp-content/uploads/2016/05/Black-Forest-Cake-55.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item" style={{textAlign: 'center'}}>
                <h5 className="head">French Fries</h5>
                <img className="d-block w-100 " src="https://ak.picdn.net/shutterstock/videos/33301063/thumb/1.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="modal-footer">
          <button style={{color: 'white', backgroundColor: '#ce0505', borderColor: 'white', fontFamily: '"Poppins", sans-serif'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div></div>

        </div>
    )
}
 export default imagegallery