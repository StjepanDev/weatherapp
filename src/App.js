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
    getData();
  };

  const addCity = () => {
    getGradovi();
  };

  const getGradovi = async () => {
    const url = 'http://localhost:3000/gradovi';

    const res = await fetch(`${url}?city=${searchTerm}`, {
      method: 'GET',
    });
    const data = await res.json();
    setCity({ ...city, ...data[0] });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const { lat, lng } = city;
  const getData = async () => {
    const response = await fetch(
      `https://api.tomorrow.io/v4/timelines?location=${lat},${lng}&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`
    );
    const data = await response.json();
    const { timelines } = data.data;
    setTemp(timelines.intervals);
    console.log(temp);
  };

  return (
    <div>
      <Navbar />
      <Container
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;
