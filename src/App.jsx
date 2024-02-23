// App.jsx
import React, { useState } from 'react';
import Header from './Header/header';
import LandingPage from './LandingPage/landingPage';
import Vehicle from './Vehicle/vehicle';
import Summary from './Summary/summary';
import audiImage from './assets/images/Audi a8.png';
import bmwImage from './assets/images/bmw.png';
import benzImage from './assets/images/benz car.png';
import './app.css';

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSelectVehicle = (vehicleData) => {
    setSelectedVehicle(vehicleData);
  };

  const vehicles = [
    { id: 1, name: 'Audi A8', price: "200 $ / day", image: audiImage },
    { id: 2, name: 'BMW M3', price: "300 $ / day", image: bmwImage },
    { id: 3, name: 'Benz S Class', price: "400 $ / day", image: benzImage }
  ];

  return (
    <div className='background_color'>
      <LandingPage />
      <Header />
      {vehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          name={vehicle.name}
          price={vehicle.price}
          image={vehicle.image}
          onSelect={handleSelectVehicle}
        />
      ))}
      <Summary selectedVehicle={selectedVehicle} />
    </div>
  );
}

export default App;

