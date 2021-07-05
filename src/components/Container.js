import React from 'react';
import Input from './Input';
import Card from './Card';

function Container() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 d-lg-flex align-items-lg-center">
          <Input />
        </div>
        <div className="col order-2">
          <Card />
        </div>
      </div>
      <img className="img-fluid" src="assets/img/36.jpg" />
      <div className="row">
        <div className="col-md-3">
          <img src="assets/img/munja%20oblak.svg" />
        </div>
        <div className="col-md-3">
          <img src="assets/img/oblak%20kisa%203.svg" />
        </div>
        <div className="col-md-3">
          <img src="assets/img/oblak%20sun.svg" />
        </div>
        <div className="col-md-3">
          <img src="assets/img/sunce.svg" />
        </div>
      </div>
    </div>
  );
}

export default Container;
