
import './App.css';
import React, { useState, useEffect } from 'react';
import DriverCards from './driverCards/DriverCards';


function App() {

  const [dailyDrivers, setDailyDrivers] = useState('')

  const marioData = fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/daily_selects', {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" }
  })
    .then(response => response.json())

  useEffect(() => {
    marioData.then(data => setDailyDrivers(data))
  }, [])

  return (
    <div className="App">
      <h1>Drivers Start Your Engines</h1>
      <h2>Today's Drivers Are</h2>
      <DriverCards driverData={dailyDrivers} />
    </div>
  );
}

export default App;
