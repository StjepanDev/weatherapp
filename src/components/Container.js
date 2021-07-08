import React from 'react';
import Input from './Input';
import Card from './Card';

function Container({ handleSubmit, handleInputChange, city, temp }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 d-lg-flex align-items-lg-center">
          <Input
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="col order-2">
          <Card city={city} temp={temp} />
        </div>
      </div>
      <img className="img-fluid" src="images/36.jpg" alt="nice clouds" />
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src="images/sun.svg" alt="sunny" />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src="images/oblakKisa.svg"
            alt="rainy clouds"
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src="images/sunOblak.svg"
            alt="sunny clouds"
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src="images/munjaOblak.svg"
            alt="lightning storm"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
