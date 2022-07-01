import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

const Banner = () =>{
<div>
<div id="carouselExampleInterval" className="carousel slide home_banner" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={require("./banner2.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={require("./banner3.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
    <div className="carousel-item">
      <img src={require("./banner4.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
    <div className="carousel-item">
      <img src={require("./banner5.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
    <div className="carousel-item">
      <img src={require("./banner6.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
    <div className="carousel-item">
      <img src={require("./banner7.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
    <div className="carousel-item">
      <img src={require("./banner1.jpg")} className="d-block w-100" alt="Banner Image" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
}

export default Banner;

