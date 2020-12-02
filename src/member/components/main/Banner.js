import React from 'react'
const Banner = () => {
  return (
    <div className=" divBanner">
      <div >
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="btnBanner active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="btnBanner" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="btnBanner"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" className="btnBanner"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://www.wheystore.vn/upload/banner/upl_banner_1606360281_image_1606360282.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.wheystore.vn/upload/banner/upl_banner_1606807111_image_1606807111.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.wheystore.vn/upload/banner/upl_banner_1606895573_image_1606895573.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.wheystore.vn/upload/banner/upl_banner_1606360258_image_1606360258.jpg" alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Banner