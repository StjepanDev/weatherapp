import React, { useEffect, useState } from 'react';

function Card() {
  const [temperature, setTemperature] = useState([]);

  return (
    <div className="card-group">
      <div className="card">
        <img className="card-img-top w-100 d-block" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background: 'rgb(103,152,233)',
              color: 'rgb(241,231,7)',
            }}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
