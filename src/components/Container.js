import React from 'react';
import Input from './Input';
import Card from './Card';

import { ReactComponent as Munja } from './MunjaOblak.svg';
import { ReactComponent as Oblak } from './OblakKisa.svg';
import { ReactComponent as SunOblak } from './SunOblak.svg';
import { ReactComponent as Sun } from './Sun.svg';

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
      <img className="img-fluid" src="images/36.jpg" alt="nice clouds" />
      <div className="row">
        <div className="col-md-3">
          <Munja alt="lightning storm" />
        </div>
        <div className="col-md-3">
          <Oblak alt="rainy clouds" />
        </div>
        <div className="col-md-3">
          <SunOblak alt="sunny clouds" />
        </div>
        <div className="col-md-3">
          <Sun alt="sunny" />
        </div>
      </div>
    </div>
  );
}

export default Container;
