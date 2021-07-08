import React from 'react';

function Card({ city, temp }) {
  const { data } = city;
  return (
    <div className="card-group">
      <div className="card">
        <img className="card-img-top w-100 d-block" />
        <div className="card-body">
          <h1 className="card-title">{data[0].city}</h1>
          <p className="card-text">{data[0].admin_name}</p>
          <p className="card-text">
            {temp[0].data.timelines[0].intervals[0].startTime}
          </p>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background: 'rgb(103,152,233)',
              color: 'rgb(241,231,7)',
            }}
          >
            {temp[0].data.timelines[0].intervals[0].values.temperature}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
