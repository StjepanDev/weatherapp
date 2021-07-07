import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

const API_KEY = 'f7kj9y7k2uSDtspu9ME7jnwXJUGY9Xqe';

function App() {
  // const getData = async () => {
  //   const response = await fetch(
  //     `https://api.tomorrow.io/v4/timelines?location=45.98529171943665,15.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };
  // getData();
  return (
    <div>
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
