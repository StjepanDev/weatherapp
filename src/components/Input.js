import React from 'react';

function Input() {
  return (
    <div className="input-group flex-row align-content-center">
      <div className="input-group-prepend">
        <span
          className="input-group-text"
          style={{
            background: 'rgb(190,198,227)',
            color: 'rgb(241,231,7)',
          }}
        >
          Search City
        </span>
      </div>
      <input className="form-control" type="text" />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          style={{
            background: 'rgb(103,152,233)',
            color: 'rgb(241,231,7)',
          }}
        >
          Go!
        </button>
      </div>
    </div>
  );
}

export default Input;
