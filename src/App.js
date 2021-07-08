import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

const API_KEY = 'f7kj9y7k2uSDtspu9ME7jnwXJUGY9Xqe';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [city, setCity] = useState({});
  const [temp, setTemp] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity();
  };

  const addCity = () => {
    getGradovi(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getGradovi = async () => {
    const url = 'http://localhost:3000/gradovi';
    const res = await fetch(`${url}?city=${searchTerm}`, {
      method: 'GET',
    });
    const data = await res.json();
    const lat = data[0].lat;
    const lng = data[0].lng;
    const response = await fetch(
      `https://api.tomorrow.io/v4/timelines?location=${lat},${lng}&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`
    );
    const data2 = await response.json();

    setCity({ data });
    setTemp([data2]);
  };
  return (
    <div>
      <Navbar />
      <Container
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        city={city}
        temp={temp}
      />
      <Footer />
    </div>
  );
}

export default App;
