import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'
import 'w3-css/w3.css';


function App() {
 
  const [coords, setCoords] = useState()


  useEffect(() => {
    const success = pos => {   
      const latLon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(latLon)
    }   
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  
  return (
   
    <div className="App">

      <CardWeather lon={coords?.lon} lat={coords?.lat}  />

    </div>
  )
}

export default App

