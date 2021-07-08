import React from 'react';

function Input({ handleSubmit, handleInputChange }) {
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
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={handleInputChange}
          placeholder="Search City"
        />
        <div className="input-group-append">
          <button
            onClick={handleSubmit}
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
      </form>
    </div>
  );
}

export default Input;
