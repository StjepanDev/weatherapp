import React, { useEffect, useState } from 'react';

function Input() {
  // const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [coords, setCoords] = useState('');

  useEffect(() => {
    getGradovi();
  }, []);

  const getGradovi = async (searchTerm) => {
    const url = 'http://localhost:3000/gradovi';

    const res = await fetch(`${url}?city=${searchTerm}`, {
      method: 'GET',
    });
    let data = await res.json();
    // console.log(data);
    setSearchTerm(data);
    setCoords(data.lat);
  };
  // console.log(cities, searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    getGradovi(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm.lat);
  const { lat, lng } = searchTerm;
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
          <h1></h1>
          Search City
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={handleInputChange}
          placeholder="Search City"
          value={searchTerm.city}
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
